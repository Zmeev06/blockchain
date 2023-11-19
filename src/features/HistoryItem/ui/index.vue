<script setup lang="ts">
import coin from "../../../shared/assets/img/coin.svg";
interface HistoryItemProps {
  type: "incoming" | "outgoing" | "refill";
  count: string | number;
  who: string[];
}

const props = defineProps<HistoryItemProps>();
</script>
<template lang="html">
  <div class="px-[20px] py-[9px] flex justify-between items-center">
    <p class="text-dark text-[12px]">
      {{
        props.type === "incoming"
          ? "Входящий перевод"
          : type === "outgoing"
          ? "Исходящий перевод"
          : "Пополнение"
      }}
    </p>
    <p>{{ props.who[0] }}</p>
    <div class="flex gap-[5px] items-center w-[100px] justify-end">
      <p class="text-[20px] text-dark font-light">{{ props.count }}</p>
      <img :src="coin" class="w-[20px] h-[20px]" />
    </div>
  </div>
</template>
<style lang="scss"></style>
