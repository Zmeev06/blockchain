<script setup lang="ts">
import { Spin } from "ant-design-vue";
</script>
<template lang="html">
  <div class="h-screen w-screen bg-dark/70 flex items-center justify-center">
    <div class="w-[350px] h-fit bg-white rounded-[10px] py-[20px]">
      <div class="border-b border-grey px-[20px]">
        <p class="text-xl text-blue mb-3">Выполняется перевод</p>
      </div>
      <div
        class="px-[20px] pt-8 flex flex-col justify-center items-center h-[150px]"
      >
        <Spin size="large" class="scale-150" />
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
