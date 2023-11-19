<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import InlineSvg from "vue-inline-svg";
import InputText from "primevue/inputtext";
import { useRoute, useRouter } from "vue-router";
import arrow from "../../../shared/assets/icons/arrow.svg";
import send from "../../../shared/assets/img/send.svg";
import cancel from "../../../shared/assets/img/cancel.svg";
import { BalanceBlock } from "../../../widgets/BalanceBlock";
import { useUserStore } from "../../../shared/store/userStore";
import { sendCript } from "../../../shared/api/services";
import { AxiosError } from "axios";
import { SendModal } from "../../../shared/ui/SendModal";
const router = useRouter();
const route = useRoute();

const recipient = ref();
const sum = ref("");

const sending = ref(false);

const sendingFunc = () => {
  sending.value = true;
  setTimeout(() => {
    sending.value = false;
    router.push("/wallet");
  }, 1500);
};
const user = useUserStore();
onMounted(() => {
  user.getUserData();
  if (!localStorage.getItem("jwtToken")) {
    router.push("auth");
  }
  if (!user.value?.login) {
    router.push("auth");
  }
  if (route.params?.user) {
    recipient.value = route.params?.user;
  }
});

const isUncorrectUser = ref(false);
const isNotEnough = ref(false);
const meError = ref(false);
const typeError = ref(false);

watch(recipient, () => {
  if (recipient.value !== user.value?.login) {
    meError.value = false;
  }
  isUncorrectUser.value = false;
});

watch(sum, () => {
  isNotEnough.value = false;
  typeError.value = false;
  if (!+sum) {
    typeError.value = true;
  }
});

const sendMoney = async () => {
  if (user.value?.login === recipient.value) {
    meError.value = true;
  } else if (typeError.value) {
  } else {
    try {
      const { status } = await sendCript(recipient.value, +sum.value);

      if (status === 200) {
        console.log("Успешный перевод.");
        sendingFunc();
      } else {
        console.error("Не удалось отправить перевод. Статус:", status);
        if (status === 404) {
          isUncorrectUser.value = true;
        } else if (status === 406) {
          isNotEnough.value = true;
        }
      }
    } catch (error: any) {
      console.error("Ошибка перевода:", error);

      if (error instanceof AxiosError && error.response) {
        console.error("Статус ошибки:", error.response.status);
      }
    }
  }
};
</script>

<template>
  <div class="h-screen relative">
    <SendModal v-if="sending" class="absolute z-20" />
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
        <h3 class="text-[20px] text-center text-grey">
          {{ user.value?.login }}
        </h3>
      </div>
      <div class="w-full flex flex-col gap-[18px]">
        <div class="h-[30px] mx-auto">
          <p class="text-red w-fit" v-if="meError">
            Не пытайтесь перевести деньги себе!
          </p>
          <p class="text-red w-fit" v-if="isUncorrectUser">
            Получателя не существует
          </p>
          <p class="text-red w-fit" v-if="isNotEnough">Недостаточно средств</p>
          <p class="text-red w-fit" v-if="typeError">Неверный ввод суммы</p>
        </div>

        <BalanceBlock />

        <InputText
          class="w-full"
          placeholder="Получатель"
          v-model="recipient"
        />
        <InputText class="w-full" placeholder="Сумма перевода" v-model="sum" />
      </div>
      <div class="w-full flex justify-between items-center">
        <div @click="sendMoney" class="flex flex-col items-center">
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
