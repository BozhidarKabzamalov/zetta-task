<script setup>
    const props = defineProps({
        label: String,
        modelValue: Array,
        options: Array,
    })
    defineEmits(['update:modelValue'])

    const updatedModelValue = (checkboxValue) => {
        if (props.modelValue.includes(checkboxValue)) {
            return props.modelValue.filter((value) => {
                return value !== checkboxValue;
            });
        } else {
            return [...props.modelValue, checkboxValue]
        }
    }
</script>

<template>
    <p>{{ label }}</p>
    <div class="checkbox-input-container">
        <div class="checkbox-input" v-for="option in options" v-bind:key="option">
            <input type="checkbox" :id="option" :value="option" @input="$emit('update:modelValue', updatedModelValue($event.target.value))">
            <label :for="option">{{ option }}</label>
        </div>
    </div>
</template>

<style scoped>
    .checkbox-input-container {
        display: flex;
    }
    .checkbox-input {
        margin-right: 20px;
    }
    .checkbox-input > input {
        margin-right: 5px;
    }
    p {
        margin-bottom: 10px;
    }
</style>