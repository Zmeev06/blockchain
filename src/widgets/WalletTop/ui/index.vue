<script setup lang="ts">
import { ref } from "vue";
import { Avatar } from "../../../shared/ui/Avatar";

const name = ref("Sergey_T06");
</script>
<template lang="html">
  <div class="flex w-full justify-between items-center">
    <Avatar :name="name" />
    <div class="w-fit flex flex-col items-center">
      <h2 class="w-fit text-[24px] text-white">Кошелек</h2>
      <p class="w-fit text-[20px] text-grey">{{ name }}</p>
    </div>
    <div class="w-[40px] h-[40px]" />
  </div>
</template>
<style lang="scss"></style>
