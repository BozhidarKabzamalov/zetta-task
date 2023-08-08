<script setup>
    defineProps({
        label: String,
        modelValue: String,
        options: Array,
    })
    defineEmits(['update:modelValue'])
</script>

<template>
    <p>{{ label }}</p>
    <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        <option disabled value="">Please select one</option>
        <option v-for="option in options" v-bind:key="option">{{ option }}</option>
    </select>
</template>

<style scoped>
    p {
        margin-bottom: 10px;
    }
</style>