<script setup lang="ts">
interface MenuProps {
  name: string;
}

const props = defineProps<MenuProps>();

const sections = [
  {
    label: props.name,
    class: "py-3 px-3 border-b border-grey text-[#4b4b4b]",
  },
  {
    label: 'Настройки',
    class: "py-2 px-3 hover:bg-grey text-dark",
  },
  {
    label: 'Выйти',
    class: "py-2 px-3 hover:bg-grey text-[#FF1717]",
  },
];
</script>
<template lang="html">
  <div class="bg-[#f6f6f6] rounded-[5px] w-[150px] flex flex-col gap-[5px]">
    <div v-for="(item, index) in sections" :key="index" :class="item.class">
      <p>{{item.label}}</p>
    </div>
  </div>
</template>
<style lang="scss"></style>
