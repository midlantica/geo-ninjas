<template>
  <nav>
    <div class="nav-wrapper amber darken-4">
      <a href="#" class="brand-logo left">GeoNinjas!</a>
      <ul class="right h100">
        <li class=""><a href="./signup">Signup</a></li>
        <li class=""><a href="./login">Login</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

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
