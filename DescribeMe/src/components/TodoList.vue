<template>
  <div class="todo-list-layout">
    <!-- Левая колонка -->
    <div class="left-column">
      <div class="menu-block">
        <div>папки</div>
      </div>
      <div class="calendar-block">календарь</div>
    </div>

    <!-- Правая колонка - задачи -->
    <div class="tasks-block">
      задачи
      <div class="form">
        <InputHeader />
        <Btn />
      </div>
      <div v-for="todo in todoStore.todos" :key="todo.id">
<ul>
    <li>
        {{ todo.text }}
    </li>
</ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useTodoStore } from "@/stores/todo";
import InputHeader from "./InputHeader.vue";
import Btn from "./Btn.vue";

const todoStore = useTodoStore();
</script>

<style scoped>
.todo-list-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  height: 70vh;
}

/* Левая колонка */
.left-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.menu-block {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.calendar-block {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
}

/* Правая колонка - задачи */
.tasks-block {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
