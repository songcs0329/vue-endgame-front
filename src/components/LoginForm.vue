<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!isFormValid || !password" type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/apis';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isFormValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const loginData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(loginData);
        this.logMessage = `${data.user.username} 님 환영합니다.`;
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
