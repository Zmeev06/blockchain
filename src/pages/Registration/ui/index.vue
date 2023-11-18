<script setup lang="ts">
import { ref, computed } from 'vue';
import { AxiosError } from 'axios';
import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import logo from '../../../shared/assets/icons/logo.svg';
import { registerUser } from '../../../shared/api/services';

const router = useRouter();

const isSmallLogin = ref(false);
const isSmallPassword = ref(false);
const isCorrectPassword = ref(true);
const isUserExists = ref(false);

const login = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleRegister = async () => {
  isSmallPassword.value = password.value.length < 5;
  isSmallLogin.value = login.value.length < 5;

  const isCorrectPasswordHandler = computed(
    () => password.value === confirmPassword.value
  );

  isCorrectPassword.value = isCorrectPasswordHandler.value;

  if (!!isSmallPassword.value || !!isSmallLogin.value || login.value.length < 5)
    return;

  if (isCorrectPassword.value) {
    try {
      const { token, status } = await registerUser(password.value, login.value);

      if (status === 403) {
        isUserExists.value = true;
        return;
      }

      if (token) {
        console.log('Успешная регистрация. JWT токен:', token);
        router.push('/wallet');
      } else {
        console.error('Не удалось зарегистрироваться. Статус:', status);
      }
    } catch (error: any) {
      console.error('Ошибка регистрации:', error);

      if (error instanceof AxiosError && error.response) {
        console.error('Статус ошибки:', error.response.status);
      }
    }
  }
};
</script>

<template>
  <div class="h-screen">
    <div
      class="h-full py-[35px] mx-[20px] flex flex-col justify-between items-center"
    >
      <h1 class="text-[32px] text-[#fff]">Регистрация</h1>
      <div class="flex flex-col items-center gap-[10px]">
        <img :src="logo" alt="" />
        <h2 class="text-[#fff] font-bold text-center text-[32px]">GWallet</h2>
        <h4
          :class="`text-red text-[20px] text-center font-bold ${
            isUserExists ? 'opacity-100' : 'opacity-0'
          }`"
        >
          Такой пользователь уже существует
        </h4>
      </div>
      <div class="w-full flex flex-col gap-[24px]">
        <div>
          <InputText class="w-full" placeholder="Логин" v-model="login" />
          <div v-if="isSmallLogin" class="text-red text-[17px]">
            Логин слишком короткий
          </div>
        </div>
        <div>
          <InputText
            :class="`w-full${isCorrectPassword ? '' : ' p-invalid'}`"
            placeholder="Пароль"
            type="password"
            v-model="password"
          />
          <div v-if="isSmallPassword" class="text-red text-[17px]">
            Пароль слишком короткий
          </div>
          <div v-if="!isCorrectPassword" class="text-red text-[17px]">
            Пароли не совпадают
          </div>
        </div>
        <div>
          <InputText
            :class="`w-full${isCorrectPassword ? '' : ' p-invalid'}`"
            placeholder="Повторите пароль"
            type="password"
            v-model="confirmPassword"
          />
          <div v-if="!isCorrectPassword" class="text-red text-[17px]">
            Пароли не совпадают
          </div>
        </div>
        <div class="text-[#fff] text-[17px]">
          Уже есть аккаунт?
          <span
            @click="() => router.push('/auth')"
            class="text-blue font-medium text-[17px] ml-[5px] py-[4px] px-[10px] rounded-[5px] bg-[#fff]"
          >
            Войти
          </span>
        </div>
      </div>
      <button
        class="w-full hover:bg-[#fff] hover:text-[#000] rounded-[3px] border-[2px] border-[#fff] py-[8px] text-[#fff] text-[16px] font-medium uppercase tracking-[1px]"
        @click="handleRegister"
      >
        Зарегистрироваться
      </button>
    </div>
  </div>
</template>
