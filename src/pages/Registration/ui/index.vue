<script setup lang="ts">
import { ref, computed } from 'vue';
import { AxiosError } from 'axios';
import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import logo from '../../../shared/assets/icons/logo.svg';
import { registerUser } from '../../../shared/api/services';

const router = useRouter();

const isCorrectPassword = ref(true);
const isUserExists = ref(false);

const login = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleRegister = async () => {
  const isCorrectPasswordHandler = computed(
    () => password.value === confirmPassword.value
  );

  isCorrectPassword.value = isCorrectPasswordHandler.value;

  if (isCorrectPasswordHandler.value) {
    try {
      const { token, status } = await registerUser(password.value, login.value);
      if (token) {
        console.log('Успешная регистрация. JWT токен:', token);
      } else {
        console.error('Не удалось зарегистрироваться. Статус:', status);
      }
    } catch (error: any) {
      console.error('Ошибка регистрации:', error);

      if (error instanceof AxiosError && error.response) {
        console.error('Статус ошибки:', error.response.status);
        if (error.response.status === 403) {
          isUserExists.value = true;
        }
      }
    }
  }
};
</script>

<template>
  <div class="h-screen">
    <div
      class="h-[80%] pt-[35px] mx-[20px] flex flex-col justify-between items-center"
    >
      <h1 class="text-[32px] text-[#fff]">Регистрация</h1>
      <div>
        <img :src="logo" alt="" />
        <h2 class="text-[#fff] font-bold text-center text-[32px] mt-[10px]">
          GWallet
        </h2>
      </div>
      <div class="w-full flex flex-col gap-[24px]">
        <InputText class="w-full" placeholder="Логин" v-model="login" />
        <div>
          <InputText
            :class="`w-full${isCorrectPassword ? '' : ' p-invalid'}`"
            placeholder="Пароль"
            type="password"
            v-model="password"
          />
          <div v-if="password.length < 5" class="text-red text-[17px]">
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
