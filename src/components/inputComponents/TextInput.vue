<script setup>
    defineProps({
        label: String,
        type: String,
        modelValue: String,
    })
    defineEmits(['update:modelValue'])
</script>

<template>
    <p class="input-label">{{ label }}</p>
    <input class="input-field" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>