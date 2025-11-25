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
      <div class="form">
        <InputHeader />
        <Btn />
      </div>
      <div v-for="todo in todoStore.todos" :key="todo.id">
        <ul class="ul-todo-list">
          <li class="li-todo-list">
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
.form {
  display: flex;
  margin: 0 auto;
}
.ul-todo-list {
  display: flex;
  align-items: center;
  margin: 1rem;
  height: 80px;
  background-color: rgb(248,249,251);
  border-radius: 1rem;
}
.li-todo-list{
  margin-left: 2rem;
}
.todo-list-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  height: 70vh;
}
.tasks-block {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: rgb(221,222,227);
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
  display: flex;
  background: rgb(221,222,227);
}
.calendar-block {
  background: rgb(221,222,227);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
}

/* Правая колонка - задачи */
</style>
