<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const sections = [
  {
    label: "Настройки",
    class: "py-2 px-3 hover:bg-grey text-dark",
    action: () => router.push("/settings"),
  },
  {
    label: "Выйти",
    class: "py-2 px-3 hover:bg-grey text-[#FF1717]",
    action: () => {
      router.push("auth");
      localStorage.setItem("jwtToken", "");
    },
  },
];
</script>
<template>
  <div class="bg-[#f6f6f6] rounded-[5px] w-[150px] flex flex-col gap-[5px]">
    <div v-for="(item, index) in sections" :key="index" :class="item.class">
      <p @click="item.action">{{ item?.label }}</p>
    </div>
  </div>
</template>
<style lang="scss"></style>
