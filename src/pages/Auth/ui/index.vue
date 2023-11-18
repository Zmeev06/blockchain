<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import logo from '../../../shared/assets/icons/logo.svg';

const login = ref('');
const password = ref('');
</script>

<template>
  <div class="h-screen">
    <div
      class="h-[80%] pt-[35px] mx-[20px] flex flex-col justify-between items-center"
    >
      <h1 class="text-[32px] text-[#fff]">Авторизация</h1>
      <div>
        <img :src="logo" alt="" />
        <h2 class="text-[#fff] font-bold text-center text-[32px] mt-[10px]">
          GWallet
        </h2>
      </div>
      <div class="w-full flex flex-col gap-[24px]">
        <InputText class="w-full" placeholder="Логин" v-model="login" />
        <InputText class="w-full" placeholder="Пароль" v-model="password" />
        <div class="text-[#fff] text-[17px]">
          Нет аккаунта?
          <a
            href="/registration"
            class="text-blue font-medium text-[17px] ml-[5px] py-[4px] px-[10px] rounded-[5px] bg-[#fff]"
            >Зарегистрироваться</a
          >
        </div>
      </div>
      <button
        class="w-full rounded-[3px] border-[2px] border-[#fff] py-[8px] text-[#fff] text-[16px] font-medium uppercase tracking-[1px]"
      >
        Авторизироваться
      </button>
    </div>
  </div>
</template>
