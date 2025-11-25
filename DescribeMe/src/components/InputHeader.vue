<template>
  <div class="inputGroup">
    <input
      type="text"
      required=""
      autocomplete="off"
      @keyup.enter="todoStore.addTodo"
      v-model="todoStore.inputText"
    />
    <label for="name">Type text here</label>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/stores/todo";

// Подключаемся к store (как будто подключаемся к базе данных)
const todoStore = useTodoStore();
</script>

<style scoped>
.inputGroup {
  font-family: "Segoe UI", sans-serif;
  margin: 1em 0 1em 0;
  max-width: 500px;
  position: relative;
  padding-right: 18px;
}

.inputGroup input {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid rgb(0, 0, 0);
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
}

.inputGroup label {
  font-size: 100%;
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(0, 0, 0);
}

.inputGroup :is(input:focus, input:valid) ~ label {
  transform: translateY(-80%) scale(0.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  /* background-color: rgb(239, 240, 245); */
}

.inputGroup :is(input:focus, input:valid) {
  border-color: rgb(150, 150, 200);
}
</style>
