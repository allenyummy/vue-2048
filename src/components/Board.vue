<template>
  <div class="board-container">
    <div v-for="(r_item, r_index) in board.cells" :key="r_index">
      <Cell v-for="(c_item, c_index) in r_item" :key="c_index">
        {{ c_item.value }}
      </Cell>
    </div>

    <!-- Tile -->
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

import Cell from '@/components/Cell.vue';
import { ArrowEvent } from '@/types';
import { Board } from '@/utils';

const board = ref(new Board());

const isArrowEvent = (event: KeyboardEvent) => {
  return [
    ArrowEvent.ArrowDown,
    ArrowEvent.ArrowUp,
    ArrowEvent.ArrowLeft,
    ArrowEvent.ArrowRight,
  ].includes(event.key as ArrowEvent);
};

const handleKeyDownEvent = (event: KeyboardEvent) => {
  event.preventDefault();
  if (isArrowEvent(event)) {
    board.value.move(event.key as ArrowEvent);
  }
};

const registerEvents = () => {
  window.addEventListener('keydown', handleKeyDownEvent);
};

const unregisterEvents = () => {
  window.removeEventListener('keydown', handleKeyDownEvent);
};

onMounted(registerEvents);
onBeforeUnmount(unregisterEvents);
</script>

<stype scoped lang="scss">
.board-container {
  background-color: var(--background-color--board);
  padding: 0.3125rem;
  border-radius: 0.5rem;
}
</stype>
