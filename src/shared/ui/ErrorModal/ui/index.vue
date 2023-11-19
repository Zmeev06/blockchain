<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useModalStore } from "../../../store/modalStore";
import { ref } from "vue";

const isOpen = useModalStore();

const modal = ref(null);
onClickOutside(modal, () => isOpen.closeModal);
</script>
<template lang="html">
  <div class="h-screen w-screen bg-dark/70 absolute" v-if="isOpen.value"></div>
  <div
    class="w-[350px] absolute h-fit left-[50%] ml-[-175px] top-[40%] bg-white mt-[-100px] rounded-[10px] py-[20px]"
    v-if="isOpen.value"
    ref="modal"
  >
    <div class="border-b border-grey px-[20px]">
      <p class="text-xl text-red mb-3">Возникла ошибка</p>
    </div>
    <div class="px-[20px] pt-3 flex flex-col">
      <p class="text-blue text-lg text-center">
        Скорее всего этот функционал еще не реализован
      </p>
      <p class="text-blue text-lg mt-3 text-center">
        Кнопка заработает в ближайшем будущем
      </p>
    </div>
  </div>
</template>
<style lang="scss"></style>
