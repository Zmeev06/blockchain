<script setup lang="ts">
import InputText from 'primevue/inputtext';

interface IndexProps {
  placeholder: string;
  modelValue: string;
}

interface InputEmit {
  (e: 'update', value: string): void;
}

const props = defineProps<IndexProps>();

const emit = defineEmits<InputEmit>();

const updateInput = (e: any) => {
  emit('update', e.target.value);
};
</script>

<template>
  <span class="p-float-label">
    <InputText id="username" @input="updateInput" />
    <label for="username">{{ props.placeholder }}</label>
  </span>
</template>
