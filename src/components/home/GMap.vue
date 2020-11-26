<template>
  <div class="map">
    <h2>Map</h2>
    <div class="google-map" id="map">

    </div>
  </div>
</template>

<script>
  import db from '@/firebase/init'
  import firebase from 'firebase/app'

  export default {
    name: 'GMap',
    data() {
      return {
        lat: 53,
        lng: -2
      }
    },
    methods: {
      renderMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: this.lat, lng: this.lng },
          zoom: 6,
          maxZoom: 15,
          minZoom: 3,
          streetViewControl: false
        })
      }
    },
    mounted() {
      // get the geolocation
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          this.lat = pos.coords.latitude
          this.lng = pos.coords.longitude
          this.renderMap()
        }, (err) => {
          console.log(err)
          this.renderMap()
        }, { maximumAge: 60000, timeout: 3000 })
      } else {
        // otherwise use default values
        this.renderMap()
      }
      //console.log(firebase.auth().currentUser)
    }
  }
</script>

<style>
  .google-map {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
