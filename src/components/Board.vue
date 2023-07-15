<template>
  <div class="board-container">
    <!-- Cell -->
    {{ board.cells }}

    <!-- Tile -->
  </div>
</template>

<script setup lang="ts">
import { Board } from '@/utils';

const board = new Board();
</script>

<stype scoped lang="scss">
.board-container {
  order: 1;
  width: 440px;
  height: 440px;
  padding: 5px;
  background-color: #baa;
  border-radius: 7px;
  outline: none;
  position: relative;
}
</stype>
