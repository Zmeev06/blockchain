<script setup lang="ts">
import { ref } from 'vue';
import InlineSvg from 'vue-inline-svg';
import InputText from 'primevue/inputtext';
import { useRouter } from 'vue-router';
import arrow from '../../../shared/assets/icons/arrow.svg';

const router = useRouter();

const login = ref('Sergey_T06');
const publicKey = ref('a4F12_ggE$3kl_!ddsa564.fglve86tivy7buoin...');
const pasport = ref('');
const inn = ref('');
</script>

<template>
  <div class="h-screen">
    <div
      class="h-full pt-[8px] pb-[34px] mx-[20px] flex flex-col justify-between items-center"
    >
      <div class="relative w-full">
        <InlineSvg
          @click="router.push('/wallet')"
          :src="arrow"
          class="text-[#fff] w-[50px] h-[50px] absolute top-[10px] left-[-5px]"
        />
        <h1 class="text-[24px] text-center text-[#fff]">Настройки</h1>
        <h3 class="text-[20px] text-center text-grey">{{ login }}</h3>
      </div>
      <div
        class="w-full hover:bg-[#fff] hover:text-[#000] flex flex-col gap-[18px]"
      >
        <InputText
          class="w-full"
          placeholder="Логин"
          v-model="login"
          disabled
        />
        <InputText
          disabled
          class="w-full"
          placeholder="Пароль"
          v-model="publicKey"
        />
        <InputText class="w-full" placeholder="Паспорт" v-model="pasport" />
        <InputText class="w-full" placeholder="Инн" v-model="inn" />
      </div>
      <div class="w-full">
        <button
          class="mb-[25px] w-full hover:bg-[#fff] hover:text-[#000] rounded-[3px] border-[2px] border-[#fff] py-[8px] text-[#fff] text-[16px] font-medium uppercase tracking-[1px]"
        >
          Сохранить
        </button>
        <button
          class="w-full hover:bg-[#fff] hover:text-[#000] rounded-[3px] border-[2px] border-red py-[8px] text-red text-[16px] font-medium uppercase tracking-[1px]"
        >
          Отменить
        </button>
      </div>
    </div>
  </div>
</template>
