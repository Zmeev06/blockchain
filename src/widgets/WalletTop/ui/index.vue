<script setup lang="ts">
import { ref } from "vue";
import { Avatar } from "../../../shared/ui/Avatar";
import { Menu } from "../../../shared/ui/Menu";
import { onClickOutside } from "@vueuse/core";
import { useUserStore } from "../../../shared/store/userStore/index";

const isOpenMenu = ref(false);

const menu = ref();

const user = useUserStore();

onClickOutside(menu, () => (isOpenMenu.value = false));
</script>
<template lang="html">
  <div class="flex w-full justify-between items-center">
    <div class="relative">
      <Avatar :name="user.value?.login" @click="isOpenMenu = true" />
      <Menu
        :name="user.value?.login"
        v-show="isOpenMenu"
        class="absolute top-12 left-3"
        ref="menu"
      />
    </div>

    <div class="w-fit flex flex-col items-center">
      <h2 class="w-fit text-[24px] text-white">Кошелек</h2>
      <p class="w-fit text-[20px] text-grey">{{ user.value?.login }}</p>
    </div>
    <div class="w-[40px] h-[40px]" />
  </div>
</template>
<style lang="scss"></style>
