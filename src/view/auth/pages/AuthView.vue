<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-tabs">
        <button
          :class="{ active: mode === 'login' }"
          @click="mode = 'login'"
        >
          Login
        </button>
        <button
          :class="{ active: mode === 'register' }"
          @click="mode = 'register'"
        >
          Register
        </button>
      </div>

      <form @submit.prevent="handleSubmit">
        <div v-if="mode === 'register'" class="input-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required />
        </div>

        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>

        <button type="submit" class="auth-button">
          {{ mode === 'login' ? 'Login' : 'Register' }}
        </button>
      </form>

      <div class="social-login">
        <button class="google-button">
          <img src="../assets/google-icon.svg" alt="Google" />
          Login with Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      mode: "login", // 'login' or 'register'
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.mode === "login") {
        console.log("Login:", this.email, this.password);
      } else {
        console.log("Register:", this.name, this.email, this.password);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7fa;
}

.auth-card {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 360px;
  .auth-tabs {
    display: flex;
    margin-bottom: 20px;
    button {
      padding: 10px 20px;
      border: none;
      background-color: #f4f7fa;
      color: #333;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      &.active {
        background-color: #007bff;
        color: #fff;
      }
    }
  }
  .input-group {
    margin-bottom: 15px;
    label {
      display: block;
      margin-bottom: 5px;
      color: #333;
    }
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
      }
    }
  }

  .auth-button {
    width: 100%;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #0056b3;
    }
  }

  .social-login {
    margin-top: 20px;
    .google-button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      color: #333;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
      img {
        margin-right: 10px;
        width: 20px;
      }
      &:hover {
        background-color: #f4f7fa;
      }
    }
  }
}
</style>