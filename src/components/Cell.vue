<template>
  <div class="cell-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<stype scoped lang="scss">
.cell-container {
  display: inline-block;
  background-color: var(--background-color--cell);
  color: var(--font-color--cell);

  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.5rem;
  margin: 0.1875rem;
  line-height: 6rem;
  // font-size: 3rem;
  font-weight: bold;
}
</stype>
