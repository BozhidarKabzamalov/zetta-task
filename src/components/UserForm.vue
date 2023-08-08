<script setup>
    import { ref, computed } from 'vue'
    import SelectInput from './inputComponents/SelectInput.vue'
    import CheckboxInput from './inputComponents/CheckboxInput.vue'
    import TextInput from './inputComponents/TextInput.vue'
    import { useUsersStore } from '../stores/users'

    const store = useUsersStore()

    const user = ref({
        name: '',
        surname: '',
        email: '',
        age: null,
        favoriteColor: '',
        contactPreference: [],
    })

    const errors = ref([])

    const selectOptions = ref(['Red', 'Green', 'Blue', 'White', 'Black'])
    const checkboxOptions = ref(['By email', 'By phone', 'Via SMS'])

    // Very rudimentary form validation. If permitted, in a real world scenario I would most likely use a library that handles all
    // the complexities of form validation.
    const onSubmit = () => {
        errors.value = [];
        const emailRegex = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        const isUsersAgeValid = user.value.age !== null && user.value.age < 120
        const isContactPreferenceValid = user.value.contactPreference !== null && user.value.contactPreference.length > 0
        const isEmailValid = user.value.email !== null && emailRegex.test(user.value.email)

        if (!user.value.name || !user.value.surname || !user.value.favoriteColor || !isUsersAgeValid || !isContactPreferenceValid || !isEmailValid) {
            if (!user.value.name) {
                errors.value.push({
                    errorType: 'name',
                    errorMessage: 'Name is required'
                })
            }
            if (!user.value.surname) {
                errors.value.push({
                    errorType: 'surname',
                    errorMessage: 'Surname is required'
                })
            }
            if (!user.value.favoriteColor) {
                errors.value.push({
                    errorType: 'favoriteColor',
                    errorMessage: 'Favorite color is required'
                })
            }
            if (!isUsersAgeValid) {
                errors.value.push({
                    errorType: 'age',
                    errorMessage: 'Age must be less than 120'
                })
            }
            if (!isContactPreferenceValid) {
                errors.value.push({
                    errorType: 'contactPreference',
                    errorMessage: 'Must have atleast one contact preference selected'
                })
            }
            if (!isEmailValid) {
                errors.value.push({
                    errorType: 'email',
                    errorMessage: 'Email should be valid'
                })
            }
            return;
        }

        store.addUser({ ...user.value, id: Math.random().toString(16).slice(2) })
    }

    const renderNameError = computed(() => errors.value.find((error) => error.errorType === 'name'))
    const renderSurnameError = computed(() => errors.value.find((error) => error.errorType === 'surname'))
    const renderFavoriteColorError = computed(() => errors.value.find((error) => error.errorType === 'favoriteColor'))
    const renderEmailError = computed(() => errors.value.find((error) => error.errorType === 'email'))
    const renderAgeError = computed(() => errors.value.find((error) => error.errorType === 'age'))
    const renderContactPreferenceError = computed(() => errors.value.find((error) => error.errorType === 'contactPreference'))
</script>

<template>
    <div class="user-form">
        <div class="user-input-container">
            <div class="user-input">
                <TextInput label="Name" type="text" v-model="user.name"></TextInput>
                <p class="error-message" v-if="renderNameError">{{ renderNameError.errorMessage }}</p>
            </div>
            <div class="user-input">
                <TextInput label="Surname" type="text" v-model="user.surname"></TextInput>
                <p class="error-message" v-if="renderSurnameError">{{ renderSurnameError.errorMessage }}</p>
            </div>
            <div class="user-input">
                <TextInput label="Email" type="email" v-model="user.email"></TextInput>
                <p class="error-message" v-if="renderEmailError">{{ renderEmailError.errorMessage }}</p>
            </div>
            <div class="user-input">
                <TextInput label="Age" type="number" v-model="user.age"></TextInput>
                <p class="error-message" v-if="renderAgeError">{{ renderAgeError.errorMessage }}</p>
            </div>
            <div class="user-input">
                <SelectInput label="Favorite Color" v-model="user.favoriteColor" :options="selectOptions" />
                <p class="error-message" v-if="renderFavoriteColorError">{{ renderFavoriteColorError.errorMessage }}</p>
            </div>
            <div class="user-input">
                <CheckboxInput label="Contact Preference" v-model="user.contactPreference" :options="checkboxOptions" />
                <p class="error-message" v-if="renderContactPreferenceError">{{ renderContactPreferenceError.errorMessage }}</p>
            </div>
        </div>
        <button class="base-button primary" @click="onSubmit">Submit</button>
    </div>
</template>

<style scoped>
    .user-form {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid black;
    }
    .user-input-container {
        display: flex;
        flex-wrap: wrap;
    }
    .user-input {
        display: flex;
        flex-direction: column;
        width: calc(50% - 10px);
        margin-bottom: 10px;
    }
    .user-input:nth-child(odd) {
        margin-right: 10px;
    }
    .user-input:nth-child(even) {
        margin-left: 10px;
    }
    .error-message {
        margin: 10px 0 0 0;
        color: #d41e1e;
    }

    @media screen and (max-width: 700px) {
        .user-input {
            width: 100%;
        }
        .user-input:nth-child(odd) {
            margin-right: 0px;
        }
        .user-input:nth-child(even) {
            margin-left: 0px;
        }
    }
</style>
