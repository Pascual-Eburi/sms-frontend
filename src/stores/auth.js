import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({ user_id: 1, name: 'John Doe', email: 'user@gmail.com', password: '1234' });
  const loading = ref(false);
  const router = useRouter();
  const isAuthenticated = computed(() => user.value !== null && user.value?.user_id !== null);
  const isAdmin = computed(() => hasRole('admin'));
  const isTeacher = computed(() => hasRole('teacher'));
  const isStudent = computed(() => hasRole('student'));

  function hasRole(role) {
    return isAuthenticated.value && user.value?.role === role;
  }
  function setLoading(value) {
    loading.value = value;
  }
  function login(email, password) {
    console.log('login', email, password);
    setLoading(true);
    setTimeout( function() {
      setLoading(false);
      user.value = { user_id: 1, name: 'John Doe', email: email, password: password };
      router.push('/dashboard');
    }, 1500)

  }
  function logout() {
    user.value = null;
  }

  function recoverPassword(email = null) {
    setLoading(true);
    setTimeout( function(){
      console.log('recover password', email);
      setLoading(false);
    }, 1000)

  }

  return {
    user,
    loading,
    isAuthenticated,
    isAdmin,
    isTeacher,
    isStudent,
    setLoading,
    login,
    logout,
    recoverPassword
  };
});
