import { ref } from 'vue';
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
    const users = ref([])

    const addUser = (user) => {
        users.value.push(user);
    }

    const removeUser = (userId) => {
        const filteredUsers = users.value.filter((user) => user.id !== userId);

        users.value = filteredUsers;
    }
  
    return { users, addUser, removeUser }
})