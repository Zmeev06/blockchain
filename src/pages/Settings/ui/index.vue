<script setup lang="ts">
import { onMounted, ref } from "vue";
import InlineSvg from "vue-inline-svg";
import InputText from "primevue/inputtext";
import { useRouter } from "vue-router";
import arrow from "../../../shared/assets/icons/arrow.svg";
import { useUserStore } from "../../../shared/store/userStore";
import { docsGet } from "../../../shared/api/services/";
import { docsPost } from "../../../shared/api/services";
import { AxiosError } from "axios";

const router = useRouter();

const pasport = ref("");
const inn = ref("");
const verifyPasport = ref("");
const verifyInn = ref("");

const user = useUserStore();

onMounted(async () => {
  user.getUserData();
  if (!localStorage.getItem("jwtToken")) {
    router.push("auth");
  }
  if (!user.value?.login) {
    router.push("auth");
  }

  const { data } = await docsGet();
  if (data) {
    verifyPasport.value = data.pasport;
    verifyInn.value = data.inn;
  }
});

const sendDocs = async () => {
  try {
    const { status } = await docsPost(pasport.value, inn.value);

    if (status === 200) {
      console.log("ok");
    } else {
      console.error("Не удалось войти. Статус:", status);
    }
  } catch (error: any) {
    console.error("Ошибка входа:", error);

    if (error instanceof AxiosError && error.response) {
      console.error("Статус ошибки:", error.response.status);
    }
  }
};
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
        <h3 class="text-[20px] text-center text-grey">
          {{ user.value?.login }}
        </h3>
      </div>
      <div class="w-full hover:text-[#000] flex flex-col gap-[18px]">
        <InputText
          class="w-full"
          placeholder="Логин"
          :value="user.value?.login"
          disabled
        />
        <InputText
          disabled
          class="w-full"
          placeholder="Пароль"
          :value="user.value?.pub_key"
        />
        <InputText
          class="w-full"
          placeholder="Паспорт"
          :disabled="verifyPasport ? true : false"
          v-model="pasport"
          :value="verifyPasport ? verifyPasport : pasport"
        />
        <InputText
          class="w-full"
          :disabled="verifyInn ? true : false"
          placeholder="Инн"
          v-model="inn"
          :value="verifyInn ? verifyInn : inn"
        />
      </div>
      <div class="w-full">
        <button
          class="mb-[25px] w-full hover:bg-[#fff] hover:text-[#000] rounded-[3px] border-[2px] border-[#fff] py-[8px] text-[#fff] text-[16px] font-medium uppercase tracking-[1px]"
          @click="sendDocs"
        >
          Сохранить
        </button>
        <button
          class="w-full hover:bg-red hover:text-white rounded-[3px] border-[2px] border-red py-[8px] text-red text-[16px] font-medium uppercase tracking-[1px]"
          @click="router.push('wallet')"
        >
          Отменить
        </button>
      </div>
    </div>
  </div>
</template>
