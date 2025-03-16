<script setup>

import {ref} from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { storeToRefs } from 'pinia'
import IconMail from '@components/icons/IconMail.vue'
import IconLoader from '@components/icons/IconLoader.vue'
import SubmitButton from '@components/UI/Buttons/SubmitButton.vue'

const authStore = useAuthStore();
const {loading} = storeToRefs(authStore);

const email = ref(null);
function submitForm(){
  authStore.recoverPassword(email.value);

}
</script>

<template>
  <section>
    <form class="card card-md" action="#" @submit.prevent="submitForm" autocomplete="off" novalidate>
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Forgot password</h2>
        <p class="text-secondary mb-4">Enter your email address and your password will be reset and emailed to you.</p>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control" v-model="email" placeholder="Enter email">
        </div>
        <div class="form-footer">
          <SubmitButton :disabled="loading" className="btn-primary btn-4 w-100">
            <template #default v-if="!loading"> <IconMail></IconMail> Send me new password </template>
            <template #loading v-if="loading"><IconLoader></IconLoader></template>
          </SubmitButton>
        </div>
      </div>
    </form>
    <div class="text-center text-secondary mt-3">
      Forget it, <router-link to="/login" tabindex="-1">send me back</router-link> to the sign in screen.
    </div>

  </section>

</template>

<style scoped>

</style>
