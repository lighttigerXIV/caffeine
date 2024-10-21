import { c as create_ssr_component, b as spread, d as escape_object, a as subscribe, v as validate_component, e as escape } from "../../chunks/ssr.js";
import "@tauri-apps/api";
import "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { w as writable } from "../../chunks/index.js";
const Coffee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { fill: "currentColor" },
      { viewBox: "0 0 22 22" },
      escape_object($$props)
    ],
    {}
  )}><path d="M1 20v-2h16v2zM2 3h17v1h1v6h-1v1h-3v3h-1v1h-1v1H4v-1H3v-1H2zm14 2v4h2V5zM4 5v8h1v1h8v-1h1V5z"/></svg>`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { fill: "none" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m21 21-9-9m0 0L3 3m9 9 9-9m-9 9-9 9"/></svg>`;
});
const Minimize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"/><path fill="currentColor" d="M2.5 12A1.5 1.5 0 0 1 4 10.5h16a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 12"/></g></svg>`;
});
const Power = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { fill: "none" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><g stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M12 2v4M8.5 3.706A9.003 9.003 0 0 0 12 21a9 9 0 0 0 3.5-17.294"/></g></svg>`;
});
const Stop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "800" },
      { height: "800" },
      { fill: "none" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><g stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8 12c0-1.886 0-2.828.586-3.414S10.114 8 12 8s2.828 0 3.414.586S16 10.114 16 12s0 2.828-.586 3.414S13.886 16 12 16s-2.828 0-3.414-.586S8 13.886 8 12Z"/></g></svg>`;
});
const state = writable({
  active: false,
  elapsedTime: "00:00:00"
});
window.addEventListener("keydown", (event2) => {
  if (event2.key === "Escape") {
    onHide();
  }
});
function onHide() {
  getCurrentWindow().hide();
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let uiState;
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  uiState = $state;
  $$unsubscribe_state();
  return `<div class="w-full h-screen bg-neutral-two text-text flex flex-col p-6 items-center overflow-auto"><div class="flex w-full items-center"><div class="flex items-center">${validate_component(Coffee, "CoffeeIcon").$$render($$result, { class: "h-8 w-8 mr-2" }, {}, {})} <p class="font-semibold text-xl" data-svelte-h="svelte-nfsqa1">Caffeine</p></div> <div class="flex flex-grow justify-end"><button>${validate_component(Minimize, "MinimizeIcon").$$render($$result, { class: "w-6 h-6" }, {}, {})}</button> <button>${validate_component(Close, "CloseIcon").$$render($$result, { class: "w-4 h-4 ml-4" }, {}, {})}</button></div></div> <button class="mt-8 flex-grow">${uiState.active ? `${validate_component(Stop, "StopIcon").$$render($$result, { class: "w-32 h-32 text-cherry" }, {}, {})}` : `${validate_component(Power, "PowerIcon").$$render($$result, { class: "w-32 h-32" }, {}, {})}`}</button> ${uiState.active ? `<p>${escape(uiState.elapsedTime)}</p>` : `<p data-svelte-h="svelte-1n0coux">Off</p>`}</div>`;
});
export {
  Page as default
};
