<script setup lang="ts">
import { HistoryItem } from "../../../features/HistoryItem";
import { onMounted, ref } from "vue";
import { getHistory } from "../../../shared/api/services";
import InlineSvg from "vue-inline-svg";
import refresh from "../../../shared/assets/icons/refresh.svg";

const history = ref();

onMounted(async () => {
  const { data } = await getHistory();
  history.value = data;
  history.value.splice(8);
  console.log(history.value);
});

const rotation = ref(45);

const refreshed = async () => {
  rotation.value += 360;
  const { data } = await getHistory();
  history.value = data;
  history.value.splice(8);
};
</script>
<template lang="html">
  <div class="rounded-t-[10px] bg-white pt-[9px] mt-[40px] h-[51vh]">
    <div class="flex justify-between px-[32px]">
      <h2 class="text-[20px] text-blue">История</h2>
      <InlineSvg
        :src="refresh"
        class="text-blue rotate"
        @click="refreshed"
        :style="{ transform: `rotate(${rotation}deg)` }"
      />
    </div>

    <div v-if="history">
      <HistoryItem
        v-for="(item, index) in history"
        :key="index"
        :count="item.amount"
        :type="item.type"
        :who="item.who"
        :class="index % 2 ? 'bg-grey' : 'bg-white'"
      />
    </div>
    <div class="flex justify-center mt-5" v-else>
      <p class="text-dark text-[18px]">История пуста</p>
    </div>
  </div>
</template>
<style lang="scss">
.rotate {
  transition: transform 1s ease;
}
</style>
