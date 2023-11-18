<script setup lang="ts">
import { ref } from "vue";
import { Avatar } from "../../../shared/ui/Avatar";
import { Menu } from "../../../shared/ui/Menu";
import { onClickOutside } from "@vueuse/core";

const name = ref("Sergey_T06");

const isOpenMenu = ref(false);

const menu = ref();

onClickOutside(menu, () => (isOpenMenu.value = false));
</script>
<template lang="html">
  <div class="flex w-full justify-between items-center">
    <div class="relative">
      <Avatar :name="name" @click="isOpenMenu = true"/>
      <Menu
        name="Sergey_T06"
        v-show="isOpenMenu"
        class="absolute top-12 left-3"
        ref="menu"
      />
    </div>

    <div class="w-fit flex flex-col items-center">
      <h2 class="w-fit text-[24px] text-white">Кошелек</h2>
      <p class="w-fit text-[20px] text-grey">{{ name }}</p>
    </div>
    <div class="w-[40px] h-[40px]" />
  </div>
</template>
<style lang="scss"></style>
