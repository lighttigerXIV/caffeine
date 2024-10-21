<script lang="ts">
  import CoffeeIcon from "$lib/icons/coffee.svg?component";
  import CloseIcon from "$lib/icons/close.svg?component";
  import MinimizeIcon from "$lib/icons/minimize.svg?component";
  import PowerIcon from "$lib/icons/power.svg?component";
  import StopIcon from "$lib/icons/stop.svg?component";
  import { onClose, onHide, onPowerClick, state } from "./vm";

  $: uiState = $state;
</script>

<div class="w-full h-screen bg-neutral-two text-text flex flex-col p-6 items-center overflow-auto">
  <div class="flex w-full items-center">
    <div class="flex items-center">
      <CoffeeIcon class="h-8 w-8 mr-2" />
      <p class="font-semibold text-xl">Caffeine</p>
    </div>
    <div class="flex flex-grow justify-end">
      <button on:click={onHide}>
        <MinimizeIcon class="w-6 h-6" />
      </button>
      <button on:click={onClose}>
        <CloseIcon class="w-4 h-4 ml-4" />
      </button>
    </div>
  </div>
  <button class="mt-8 flex-grow" on:click={onPowerClick}>
    {#if uiState.active}
      <StopIcon class="w-32 h-32 text-cherry" />
    {:else}
      <PowerIcon class="w-32 h-32" />
    {/if}
  </button>
  {#if uiState.active}
    <p>{uiState.elapsedTime}</p>
  {:else}
    <p>Off</p>
  {/if}
</div>
