<script setup lang="ts">
import { WalletTop } from '../../../widgets/WalletTop';
import { BalanceBlock } from '../../../widgets/BalanceBlock';
import { WalletBtns } from '../../../widgets/WalletBtns';
import { History } from '../../../widgets/History';
</script>

<template lang="html">
  <div class="flex flex-col justify-between">
    <div class="pt-[18px] px-[16px]">
      <WalletTop />
      <BalanceBlock />
      <WalletBtns />
    </div>
    <History />
  </div>
</template>
