// Voice chat controls. Deliberately plain and always visible while you are at a
// spot, because a live microphone should never be a thing you can forget about:
// the button turns red and pulses whenever your mic is actually transmitting.

import { events } from "../state/gameState.js";
import {
  voiceToggle, voiceEnabled, voiceSetOpenMic, voiceOpenMic,
  setTalking, voicePeers, voicePollLevels,
} from "./voiceChat.js";

const PTT_KEY = "v";

export class VoiceUI {
  constructor() {
    this.root = null;
    this.btn = null;
    this.list = null;
    this._poll = null;
  }

  mount() {
    if (this.root) return;
    const el = document.createElement("div");
    el.id = "voice-panel";
    el.innerHTML = `
      <button id="voice-toggle" type="button" title="Proximity voice chat">
        <span class="v-dot"></span><span class="v-label">Voice off</span>
      </button>
      <div id="voice-peers"></div>
      <label id="voice-mode" class="hidden">
        <input type="checkbox" id="voice-open"> open mic
        <span class="v-hint">(else hold <b>${PTT_KEY.toUpperCase()}</b>)</span>
      </label>`;
    document.body.appendChild(el);
    this.root = el;
    this.btn = el.querySelector("#voice-toggle");
    this.list = el.querySelector("#voice-peers");
    this.mode = el.querySelector("#voice-mode");
    this.openBox = el.querySelector("#voice-open");

    this.btn.addEventListener("click", async () => {
      const on = await voiceToggle();
      this.render();
      if (on) events.emit("toast", { msg: "Voice on — hold V to talk", kind: "success" });
    });
    this.openBox.addEventListener("change", () => voiceSetOpenMic(this.openBox.checked));

    // push-to-talk. Ignored while typing in the chat box.
    const typing = (e) => {
      const t = e.target;
      return t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
    };
    addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() !== PTT_KEY || e.repeat || typing(e)) return;
      if (voiceEnabled() && !voiceOpenMic()) setTalking(true);
    });
    addEventListener("keyup", (e) => {
      if (e.key.toLowerCase() !== PTT_KEY || typing(e)) return;
      if (voiceEnabled() && !voiceOpenMic()) setTalking(false);
    });
    // Never leave the mic hot because the window lost focus mid-press.
    addEventListener("blur", () => { if (voiceEnabled() && !voiceOpenMic()) setTalking(false); });

    events.on("voice:state", () => this.render());
    events.on("voice:talking", (on) => this.root.classList.toggle("talking", !!on));
    events.on("voice:peers", () => this.renderPeers());

    this._poll = setInterval(() => { voicePollLevels(); }, 250);
    this.render();
  }

  render() {
    const on = voiceEnabled();
    this.root.classList.toggle("on", on);
    this.btn.querySelector(".v-label").textContent = on ? "Voice on" : "Voice off";
    this.mode.classList.toggle("hidden", !on);
    this.openBox.checked = voiceOpenMic();
    this.renderPeers();
  }

  renderPeers() {
    if (!voiceEnabled()) { this.list.innerHTML = ""; return; }
    const ps = voicePeers().filter((p) => p.state === "connected" || p.state === "connecting");
    this.list.innerHTML = ps.length
      ? ps.map((p) => `<div class="v-peer ${p.speaking ? "speaking" : ""}">
           <i style="opacity:${(0.25 + p.gain * 0.75).toFixed(2)}"></i>
           ${p.state === "connected" ? "in range" : "connecting…"}</div>`).join("")
      : `<div class="v-peer muted">nobody in earshot</div>`;
  }

  unmount() {
    clearInterval(this._poll);
    this.root?.remove();
    this.root = null;
  }
}

export const voiceUI = new VoiceUI();
