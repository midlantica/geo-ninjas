<template>
  <nav>
    <div class="nav-wrapper amber darken-4">
      <router-link :to="{ name: 'GMap' }" class="brand-logo left">GeoNinjas!</router-link>
      <ul class="right h100">
        <li class=""><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
        <li class=""><router-link :to="{ name: 'Login' }">Login</router-link></li>
        <li><a @click="logout">Logout</a></li>
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

      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push({ name: 'Login' })
        })
      }
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
