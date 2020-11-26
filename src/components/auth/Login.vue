<template>
  <div class="login">
    <form @submit.prevent="login" class="card-panel">
      <h2 class="center deep-purple-text">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="btn deep-purple">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
  import firebase from "firebase/app";

  export default {
    name: 'Login',
    data() {
      return {
        email: null,
        passowrd: null,
        feedback: null
      }
    },
    methods: {
      login() {
        //console.log(this.email, this.password);
        if(this.email && this.password) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              console.log(cred.user)
              this.$router.push({ name: 'GMap' })
            }).catch(err => {
              this.feedback = err.message
            })
          this.feedback = null
        } else {
          this.feedback = "Please fill in to both fields."
        }
      }
    }
  }
</script>

<style>
  .login {
    max-width: 400px;
    margin: 3rem auto;
  }

  .login h2 {
    font-size: 2rem;
  }

  .login .field {
    margin-bottom: 1rem;
  }

  .login button {
    text-transform: capitalize;
    margin-top: 1rem;
  }
</style>
