<script setup lang="ts">
interface AvatarProps {
  name?: string;
}

const props = defineProps<AvatarProps>();
</script>
<template lang="html">
  <div
    class="rounded-full bg-white flex justify-center items-center w-[40px] h-[40px]"
  >
    <p class="text-dark text-[16px]">
      {{ props.name?.split("")[0] }}
    </p>
  </div>
</template>
<style lang="scss"></style>
