<script setup lang="ts">
import { ref } from 'vue';
import { Input } from '../shared/ui/Input';

const inputValue = ref('');
</script>

<template>
  <div>
    <Input placeholder="Логин" :model-value="inputValue" />
    {{ inputValue }}
  </div>
</template>

<style lang="scss">
@import url('./style.scss');
</style>
