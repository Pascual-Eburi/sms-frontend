<template>
  <div class="card card-md">
    <div class="card-body">
      <h2 class="h2 text-center mb-4">Login to your account</h2>
      <form action="" method="post" @submit.prevent="submitForm" autocomplete="off" novalidate>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email" v-model="form.email" class="form-control" placeholder="your@email.com" autocomplete="off" />
        </div>
        <div class="mb-2">
          <label class="form-label">
            Password
          </label>
          <PasswordInput v-model="form.password"></PasswordInput>
        </div>
        <div class="mb-2">
          <label class="form-check">
            <input type="checkbox" class="form-check-input" />
            <span class="form-check-label">Remember me on this device</span>
          </label>
        </div>
        <div class="form-footer">
          <SubmitButton :disabled="loading" className="btn-primary w-100">
            <template #default v-if="!loading"> Sign in </template>
            <template #loading v-if="loading"><IconLoader></IconLoader></template>
          </SubmitButton>

        </div>
      </form>
    </div>
  </div>
  <div class="text-center text-secondary mt-3">
    ¿ Olvidaste tu contraseña ? <router-link to="/forgot-password" tabindex="-1">Recupérala aquí</router-link>
  </div>
</template>

<script setup>
import SubmitButton from '@components/UI/Buttons/SubmitButton.vue'
import IconLoader from '@components/icons/IconLoader.vue'
import {ref} from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { storeToRefs } from 'pinia'
import PasswordInput from '@components/UI/Inputs/PasswordInput.vue'


const authStore = useAuthStore();
const {loading} = storeToRefs(authStore);

const form = ref({
  email: null,
  password: null,
});

function submitForm() {
  authStore.login(form.value.email, form.value.password)

}

</script>

<style scoped>

</style>
