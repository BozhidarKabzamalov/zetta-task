<script setup>
    import { ref } from 'vue'
    import { useUsersStore } from '../../stores/users'
    import ConfirmationDialog from '../dialogComponents/ConfirmationDialog.vue';

    const props = defineProps({
        user: Object,
    })

    const store = useUsersStore()

    const showConfirmationDialog = ref(false);

    const onConfirm = () => {
        showConfirmationDialog.value = false;
        store.removeUser(props.user.id)
    }

    const onCancel = () => {
        showConfirmationDialog.value = false;
    }
</script>

<template>
    <tr>
        <td>{{ props.user.name }}</td>
        <td>{{ props.user.surname }}</td>
        <td>{{ props.user.email }}</td>
        <td>{{ props.user.age }}</td>
        <td>{{ props.user.favoriteColor }}</td>
        <td>{{ props.user.contactPreference.join(', ') }}</td>
        <td><button class="base-button secondary delete-user-button" @click="showConfirmationDialog = true">Delete</button></td>
    </tr>
    <ConfirmationDialog onConfirmText="OK" onCancelText="Cancel" @on-confirm="onConfirm" @on-cancel="onCancel" @on-dismiss="onCancel" v-if="showConfirmationDialog" >
        <p>Are you sure you would like to delete this user?</p>
    </ConfirmationDialog>
</template>

<style scoped>
    .delete-user-button {
        width: 100%;
        height: 100%;
    }
</style>
