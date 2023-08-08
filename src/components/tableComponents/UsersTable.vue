<script setup>
    import { ref } from 'vue' 
    import TableRow from './TableRow.vue'
    import ConfirmationDialog from '../dialogComponents/ConfirmationDialog.vue';

    const props = defineProps({
        users: Array,
    })

    const showExportDialog = ref(false);

    const onCancel = () => {
        showExportDialog.value = false;
    }
</script>

<template>
    <div class="users-table">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Favorite Color</th>
                    <th>Contact Preferences</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <TableRow v-for="user in props.users" v-bind:key="user.id" :user="user" />
            </tbody>
        </table>
        <button class="base-button tertiary" @click="showExportDialog = true">Export</button>
        <ConfirmationDialog onCancelText="Cancel" @on-cancel="onCancel" @on-dismiss="onCancel" v-if="showExportDialog" >
            <p>{{ JSON.stringify(props.users, null, 2) }}</p>
        </ConfirmationDialog>
    </div>
</template>

<style scoped>
    .users-table {
        width: 100%;
        overflow: auto;
    }
    .users-table > button {
        margin-top: 20px;
    }
</style>
