<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import logo from '../../../shared/assets/icons/logo.svg';

const login = ref('');
const password = ref('');
const confirmPassword = ref('');
</script>

<template>
  <div class="h-screen">
    <div
      class="h-[80%] pt-[35px] mx-[20px] flex flex-col justify-between items-center"
    >
      <h1 class="text-[32px] text-[#fff]">Регистрация</h1>
      <img :src="logo" alt="" />
      <div class="w-full">
        <InputText
          class="w-full mb-[24px]"
          placeholder="Логин"
          v-model="login"
        />
        <InputText
          class="w-full mb-[24px]"
          placeholder="Пароль"
          v-model="password"
        />
        <InputText
          class="w-full"
          placeholder="Повторите пароль"
          v-model="confirmPassword"
        />
      </div>
      <button
        class="w-full rounded-[5px] border-[1px] border-[#fff] py-[8px] text-[#fff] text-[24px]"
      >
        Зарегистрироваться
      </button>
    </div>
  </div>
</template>
