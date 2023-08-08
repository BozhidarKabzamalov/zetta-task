<script setup>
    import UsersTable from '../components/tableComponents/UsersTable.vue';
    import UserForm from '../components/UserForm.vue';
    import { useUsersStore } from '../stores/users'
    
    // Uses Pinia global state management in order to avoid emiting events all the way up here from the TableRow component when deleting users
    const store = useUsersStore()
</script>

<template>
    <div class="home">
        <UserForm />
        <UsersTable v-if="store.users && store.users.length > 0" :users="store.users" />
        <p v-else>No Data</p>
    </div>
</template>

<style scoped>
    .home {
        padding: 20px;
    }
</style>
