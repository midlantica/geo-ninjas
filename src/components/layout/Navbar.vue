<template>
  <nav>
    <div class="nav-wrapper amber darken-4">
      <router-link :to="{ name: 'GMap' }" class="brand-logo left">GeoNinjas!</router-link>
      <ul class="right h100">
        <li v-if="!user"><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
        <li v-if="!user"><router-link :to="{ name: 'Login' }">Login</router-link></li>
        <li v-if="user"><a>{{ user.email }}</a></li>
        <li v-if="user"><a @click="logout">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import firebase from "firebase/app"

  export default {
    name: 'Navbar',
    data() {
      return {
        user: null
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push({ name: 'Login' })
        })
      }
    },
    created() {
      // let user = firebase.auth().currentUser BAD DOESNT WORK
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.user = user
        } else {
          this.user = null
        }
      })
    }
  }
</script>

<style>
  .brand-logo {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-weight: 600;
    letter-spacing: 0.05rem;
    margin-left: 1rem;;
  }

</style>
