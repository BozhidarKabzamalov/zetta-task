<script setup>
    const props = defineProps({
        onConfirmText: String,
        onCancelText: String,
    })

    const emit = defineEmits(['onConfirm', 'onCancel', 'onDismiss'])
</script>

<template>
    <div class="confirmation-dialog">
        <div class="confirmation-dialog-background" @click="emit('onDismiss')"></div>
        <div class="confirmation-dialog-foreground">
            <slot></slot>
            <div class="buttons-container">
                <button class="base-button primary" v-if="props.onConfirmText" @click="emit('onConfirm')">{{ props.onConfirmText }}</button>
                <button class="base-button secondary" v-if="props.onCancelText" @click="emit('onCancel')">{{  props.onCancelText }}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .confirmation-dialog {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
    .confirmation-dialog-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 75%;
    }
    .confirmation-dialog-foreground {
        position: absolute;
        padding: 20px;
        border-radius: 4px;
        background-color: #ffffff;
        min-width: 400px;
        max-width: 1200px;
    }
    .buttons-container {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .buttons-container > button {
        flex: 1;
    }
    .buttons-container > button:first-child {
        margin-right: 20px;
    }
</style>
