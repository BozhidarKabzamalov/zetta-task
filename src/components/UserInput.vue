<script setup>
    import { ref } from 'vue';

    const name = ref('');
    const surname = ref('');
    const email = ref('');
    const age = ref();
    const favoriteColor = ref();
    const contactPreference = ref();

</script>

<template>
    <div class="user-input-container">
        <div class="user-input">
            <p>Name</p>
            <input
                :value="name"
                @input="event => name = event.target.value"
            >
        </div>
    </div>
    <p @click="$emit('onUserInput', name)">Click me</p>
</template>

<style scoped>
    .user-input {
        display: flex;
        flex-direction: row;
    }

    .user-input > p {
        margin-right: 10px;
    }
</style>
