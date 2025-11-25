<template>
  <header class="header">
    <div class="containter">
      <div class="logo">ToDo List</div>
      <!-- <nav class="nav-container">
        <div class="logo">Taksts</div>
        <div class="logo">archive</div>
      </nav> -->
    </div>
  </header>
</template>

<script setup>
// imports here
import InputHeader from "./InputHeader.vue";
import Btn from "./Btn.vue";
</script>

<style scoped>
.nav-container{
  display: flex;
}
.header {
  width: 100%;
  max-width: 15 00px;
  background-color: rgb(221,222,227);
  color: white;
  padding: 1rem 0;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 50px;
}

/* Контейнер для центрирования содержимого */
.containter {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

/* Логотип */
.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  white-space: nowrap;
  font-family: "Unbounded", sans-serif;
}

/* Форма */
.form {
  display: flex;
  gap: 1rem;
  flex: 1;
  max-width: 500px;
}

.form input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  font-family: "Unbounded", sans-serif;
  font-size: 1rem;
  background-color: rgb(40, 40, 40);
  color: white;
  outline: none;
}

.form input:focus {
  background-color: rgb(50, 50, 50);
  box-shadow: 0 0 0 2px rgb(70, 70, 70);
}

.form input::placeholder {
  color: rgb(150, 150, 150);
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  font-family: "Unbounded", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.btn:hover {
  background-color: #45a049;
}

.btn:active {
  transform: translateY(1px);
}
</style>
