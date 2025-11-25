import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  let id = 0;
  let inputText = ref("");
  let todos = ref([]);
  function addTodo() {
    if (inputText.value.trim() != "") {
      todos.value.push({
        id: id++,
        text: inputText.value,
        done: false,
      });
    }
    inputText.value = "";
  }

  

  return {
    inputText,
    todos,
    addTodo,
    // deleteTodo,
    // isDoneTodo
  };
});
