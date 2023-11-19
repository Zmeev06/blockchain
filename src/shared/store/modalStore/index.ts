import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const value = ref<boolean>(false);

  function openModal() {
    value.value = true
  }

  function closeModal() {
    value.value = false
  }

  return { value, openModal, closeModal };
});
