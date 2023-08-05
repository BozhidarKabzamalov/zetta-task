<script setup>
    import UsersTable from '../components/UsersTable.vue';
    import UserInput from '../components/UserInput.vue';
    import { ref } from 'vue';

    const users = ref([]);

    const onUserInput = (userInput) => {
        console.log(userInput);
    }
</script>

<template>
    <UserInput @on-user-input="onUserInput" />
    <UsersTable />
</template>

<style scoped>

</style>
