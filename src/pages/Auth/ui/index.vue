<script setup lang="ts">
import { ref, onMounted } from "vue";
import { AxiosError } from "axios";
import { useRouter } from "vue-router";
import InputText from "primevue/inputtext";
import logo from "../../../shared/assets/icons/logo.svg";
import { loginUser } from "../../../shared/api/services";
import { useUserStore } from "../../../shared/store/userStore";

const router = useRouter();

const isErrorAuth = ref(false);

const login = ref("");
const password = ref("");
const user = useUserStore();

onMounted(() => {
  user.getUserData();

  if (user.value?.login !== '') {
    // router.push('wallet')
  }
});

const handleLogin = async () => {
  try {
    const { token, status } = await loginUser(login.value, password.value);

    if (status === 401 || status === 405 || status === 500) {
      isErrorAuth.value = true;
      return;
    }

    if (token) {
      router.push("/wallet");
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
      class="h-full py-[35px] mx-[20px] flex flex-col justify-between items-center"
    >
      <h1 class="text-[32px] text-[#fff]">Авторизация</h1>
      <div class="flex flex-col items-center gap-[10px]">
        <img :src="logo" alt="" />
        <h2 class="text-[#fff] font-bold text-center text-[32px]">GWallet</h2>
        <h4
          :class="`text-red text-[20px] text-center font-bold ${
            isErrorAuth ? 'opacity-100' : 'opacity-0'
          }`"
        >
          Неправильный логин или пароль
        </h4>
      </div>
      <div class="w-full flex flex-col gap-[24px]">
        <InputText class="w-full" placeholder="Логин" v-model="login" />
        <InputText
          class="w-full"
          placeholder="Пароль"
          type="password"
          v-model="password"
        />
        <div class="text-[#fff] text-[17px]">
          Нет аккаунта?
          <span
            @click="() => router.push('/registration')"
            class="text-blue font-medium text-[17px] ml-[5px] py-[4px] px-[10px] rounded-[5px] bg-[#fff]"
          >
            Зарегистрироваться
          </span>
        </div>
      </div>
      <button
        class="w-full hover:bg-[#fff] hover:text-[#000] rounded-[3px] border-[2px] border-[#fff] py-[8px] text-[#fff] text-[16px] font-medium uppercase tracking-[1px]"
        @click="handleLogin"
      >
        Авторизироваться
      </button>
    </div>
  </div>
</template>
