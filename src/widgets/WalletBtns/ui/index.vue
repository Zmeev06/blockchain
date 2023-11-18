<script setup lang="ts">
import add from "../../../shared/assets/img/add.svg";
import send from "../../../shared/assets/img/send.svg";
import deduce from "../../../shared/assets/img/deduce.svg";
</script>
<template lang="html">
  <div class="flex justify-between mt-[40px]">
    <div class="flex flex-col items-center">
      <img :src="add" class="w-[70px] h-[70px]" />
      <p class="text-white font-light">Пополнить</p>
    </div>
    <div class="flex flex-col items-center">
      <img :src="send" class="w-[70px] h-[70px]" />
      <p class="text-white font-light">Перевести</p>
    </div>
    <div class="flex flex-col items-center">
      <img :src="deduce" class="w-[70px] h-[70px]" />
      <p class="text-white font-light">Вывести</p>
    </div>
  </div>
</template>
<style lang="scss"></style>
