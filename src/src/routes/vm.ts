import { event } from "@tauri-apps/api";
import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { onMount } from "svelte";
import { get, writable } from "svelte/store";

export const state = writable({
  active: false,
  elapsedTime: "00:00:00",
});

let beginTime = 0;
let runtimeInterval = 0;

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    onHide();
  }
});

export function onPowerClick() {
  if (get(state).active) {
    disableCaffeine();
  } else {
    enableCaffeine();
  }
}

async function enableCaffeine() {
  let newState = get(state);
  newState.active = true;
  beginTime = Date.now();

  state.set(newState);

  await invoke("enable_caffeine");

  runtimeInterval = setInterval(() => {
    let newState = get(state);
    newState.elapsedTime = getFormattedTime(Date.now() - beginTime);
    state.set(newState);
  }, 1000);
}

async function disableCaffeine() {
  let newState = get(state);
  newState.active = false;
  newState.elapsedTime = "00:00:00";
  beginTime = 0;

  state.set(newState);

  clearInterval(runtimeInterval);

  await invoke("disable_caffeine")
}

function getFormattedTime(runtimeMillis: number): string {
  const runtimeSeconds = Math.floor(runtimeMillis / 1000);
  const hours = Math.floor(runtimeSeconds / 3600);
  const minutes = Math.floor((runtimeSeconds % 3600) / 60);
  const seconds = runtimeSeconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}



export function onHide() {
  getCurrentWindow().hide();
}

export function onClose() {
  disableCaffeine();
  getCurrentWindow().close();
}
