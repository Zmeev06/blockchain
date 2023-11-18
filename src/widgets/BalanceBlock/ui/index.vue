<script setup lang="ts">
import { ref } from 'vue';
import coin from '../../../shared/assets/img/coin.svg';

const balance = ref('3000');
</script>
<template>
  <div
    class="bg-white w-full px-[12px] pt-[8px] rounded-[5px] mt-[30px] pb-[20px]"
  >
    <div>
      <p class="text-[20px] text-blue">Баланс</p>
    </div>
    <div class="flex items-center h-fit gap-1">
      <p class="text-[48px] text-dark font-light">{{ balance }}</p>
      <div class="h-[40px] flex items-end justify-center">
        <img :src="coin" />
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
