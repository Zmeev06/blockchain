<script setup lang="ts">
import { WalletTop } from "../../../widgets/WalletTop";
import { BalanceBlock } from "../../../widgets/BalanceBlock";
import { WalletBtns } from "../../../widgets/WalletBtns";
import { History } from "../../../widgets/History";
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import { ErrorModal } from "../../../shared/ui/ErrorModal";
import { onClickOutside } from '@vueuse/core';
import { useModalStore } from '../../../shared/store/modalStore/index';

const router = useRouter();
onMounted(() => {
  if (!localStorage.getItem("jwtToken")) {
    router.push("auth");
  }
});

const isOpenModal = useModalStore()
const modal = ref(null)

onClickOutside(modal, () => {
  console.log('test');
  isOpenModal.closeModal()})
</script>

<template lang="html">
  <div class="flex flex-col justify-between">
    <div class="pt-[18px] px-[16px]">
      <WalletTop />
      <BalanceBlock />
      <WalletBtns />
    </div>
    <History />
    <ErrorModal ref="modal"/>
  </div>
</template>
