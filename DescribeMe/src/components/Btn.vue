<template>
  <!-- From Uiverse.io by felipesntr -->
  <button @click="todoStore.addTodo">Add</button>
</template>

<script setup>
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();
</script>

<style scoped>
button {
  position: relative;
  display: inline-block;
  margin: 15px;
  padding: 0 30px;
  text-align: center;
  font-size: 18px;
  text-decoration: none;
  color: #000000;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #000000;
  border-radius: 10px;
}



button:active {
  transform: scale(0.9);
}
</style>
