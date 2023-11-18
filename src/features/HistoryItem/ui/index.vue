<script setup lang="ts">
import coin from "../../../shared/assets/img/coin.svg";
interface HistoryItemProps {
  type: "incoming" | "outgoing" | "refill";
  count: string | number;
}

const props = defineProps<HistoryItemProps>();
</script>
<template lang="html">
  <div class="px-[20px] py-[9px] flex justify-between">
    <p class="text-dark">
      {{
        props.type === "incoming"
          ? "Входящий перевод"
          : type === "outgoing"
          ? "Исходящий перевод"
          : "Пополнение"
      }}
    </p>
    <div class="flex gap-[5px] items-center">
      <p class="text-[20px] text-dark font-light">{{ props.count }}</p>
      <img :src="coin" class="w-[20px] h-[20px]" />
    </div>
  </div>
</template>
<style lang="scss"></style>
