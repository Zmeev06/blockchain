<script setup lang="ts">
import { ref } from 'vue';
import { push } from 'vue-router';
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
      <div class="w-full flex flex-col gap-[24px]">
        <InputText class="w-full" placeholder="Логин" v-model="login" />
        <InputText class="w-full" placeholder="Пароль" v-model="password" />
        <InputText
          class="w-full"
          placeholder="Повторите пароль"
          v-model="confirmPassword"
        />
        <div class="text-[#fff] text-[17px]">
          Уже есть аккаунт?
          <a
            href="/"
            class="text-blue font-medium text-[17px] ml-[5px] py-[4px] px-[10px] rounded-[5px] bg-[#fff]"
            >Войти</a
          >
        </div>
      </div>
      <button
        class="w-full rounded-[3px] border-[2px] border-[#fff] py-[8px] text-[#fff] text-[16px] font-medium uppercase tracking-[1px]"
      >
        Зарегистрироваться
      </button>
    </div>
  </div>
</template>
