<script setup>

import { onMounted} from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { storeToRefs } from 'pinia'
import initDropdowns from '@/utils/UI/initDropdowns.js'
import '@/assets/styles/scss/styles.scss'
import '@/assets/styles/main.css'
import '@/assets/styles/custom.css'
import { useActiveLink } from '@/composables/useActiveLink';
import AuthLayout from '@components/Layouts/AuthLayout.vue'

const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)

// console.log("%c C %c O %c R %c E %c %s ", "border-bottom:3px solid #e9bcbc;border-radius:5px 0 0 5px;color:white;background:indianred;font-weight:bold;text-shadow: 0 1px 1px #333;padding:5px 0;", "border-bottom:3px solid #f7bbb1;color:white;background:tomato;font-weight:bold;text-shadow: 0 1px 1px #333;padding:5px 0;", "border-bottom:3px solid #fbe0ad;color:white;background:orange;font-weight:bold;text-shadow: 0 1px 1px #333;padding:5px 0;", "border-bottom:3px solid #fff2ab;border-radius:0 5px 5px 0;color:white;background:gold;font-weight:bold;text-shadow: 0 1px 1px #333;padding:5px 0;", "background:#fff;color:#333;font-weight:bold;padding:5px 0;", "lib loaded");

onMounted( () =>{ initDropdowns(); });
useActiveLink();

</script>
<template>
  <template v-if="isAuthenticated">
    <RouterView></RouterView>
  </template>
  <AuthLayout v-else>
    <RouterView></RouterView>
  </AuthLayout>
</template>
