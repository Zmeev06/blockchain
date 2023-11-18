<script setup lang="ts">
import { HistoryItem } from "../../../features/HistoryItem";

interface HistoryItemProps {
  type: "incoming" | "outgoing" | "refill";
  count: string | number;
}
const history: HistoryItemProps[] = [
  {
    type: "incoming",
    count: 300,
  },
  {
    type: "outgoing",
    count: 300,
  },
  {
    type: "refill",
    count: 300,
  },
  {
    type: "incoming",
    count: 300,
  },
  {
    type: "outgoing",
    count: 300,
  },
  {
    type: "refill",
    count: 300,
  },
  {
    type: "incoming",
    count: 300,
  },
  {
    type: "outgoing",
    count: 300,
  },
];
</script>
<template lang="html">
  <div class="rounded-t-[10px] bg-white pt-[9px] mt-[40px]">
    <h2 class="ml-[32px] text-[20px] text-blue">История</h2>
    <div>
      <HistoryItem
        v-for="(item, index) in history"
        :key="index"
        :count="item.count"
        :type="item.type"
        :class="index % 2 ? 'bg-grey' : 'bg-white'"
      />
    </div>
  </div>
</template>
<style lang="scss"></style>
