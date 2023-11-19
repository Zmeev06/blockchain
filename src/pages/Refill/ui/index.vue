<script setup lang="ts">
import { ref, onMounted } from "vue";
import InlineSvg from "vue-inline-svg";
import InputText from "primevue/inputtext";
import { useRouter } from "vue-router";
import arrow from "../../../shared/assets/icons/arrow.svg";
import coin from "../../../shared/assets/img/coin.svg";
import send from "../../../shared/assets/img/send.svg";
import cancel from "../../../shared/assets/img/cancel.svg";

const router = useRouter();

const balance = ref("3000");

const recipient = ref("");
const sum = ref("");
const login = ref('Sergey_T06')

onMounted(() => {
  if (!localStorage.getItem("jwtToken")) {
    router.push("auth");
  }
});
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
        <h1 class="text-[24px] text-center text-[#fff]">Перевод</h1>
        <h3 class="text-[20px] text-center text-grey">{{ login }}</h3>
      </div>
      <div class="w-full flex flex-col gap-[18px]">
        <div
          class="bg-white w-full px-[12px] pt-[8px] rounded-[5px] mt-[30px] pb-[10px]"
        >
          <div>
            <p class="text-[20px] text-blue">Баланс</p>
          </div>
          <div class="flex items-center h-fit gap-1">
            <p class="text-[24px] text-dark font-light">{{ balance }}</p>
            <div class="flex items-end justify-center">
              <img class="h-[25px] w-[25px]" :src="coin" />
            </div>
          </div>
        </div>
        <InputText
          class="w-full"
          placeholder="Получатель"
          v-model="recipient"
        />
        <InputText class="w-full" placeholder="Сумма перевода" v-model="sum" />
      </div>
      <div class="w-full flex justify-between items-center">
        <div @click="router.push('/refill')" class="flex flex-col items-center">
          <img :src="send" class="w-[70px] h-[70px]" />
          <p class="text-white font-light">Перевести</p>
        </div>
        <div @click="router.push('/wallet')" class="flex flex-col items-center">
          <img :src="cancel" class="w-[70px] h-[70px]" />
          <p class="text-red font-light">Отменить</p>
        </div>
      </div>
    </div>
  </div>
</template>
