<template>
  <div class="board-container">
    <div v-for="(r_item, r_index) in board.cells" :key="r_index">
      <Cell v-for="(c_item, c_index) in r_item" :key="c_index">
        {{ c_item }}
      </Cell>
    </div>

    <!-- Tile -->
  </div>
</template>

<script setup lang="ts">
import Cell from '@/components/Cell.vue';
import { Board } from '@/utils';

const board = new Board();
</script>

<stype scoped lang="scss">
.board-container {
  background-color: var(--background-color--board);
  padding: 0.3125rem;
  border-radius: 0.5rem;
}
</stype>
