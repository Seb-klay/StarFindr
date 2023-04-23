<template>
  <div id="home">
    <div class="row justify-content-around">
      <div class="col-12 col-md-4" id="search">
        <b-button>
          <router-link to="/recherche">Recherche</router-link>
        </b-button>
      </div>
      <div class="col-12 col-md-4" id="visibleStars">
        <b-button>
          <router-link to="/visibleStars">Etoiles visibles</router-link>
        </b-button>
      </div>
      <div class="col-12 col-md-4" id="staroftheday">
        <b-button>
          <router-link to="/starOfTheDay">Photo du jour</router-link>
        </b-button>
      </div>
      <div class="col-12 col-md-4" id="planetes">
        <b-button>
          <router-link to="/planetes">Planètes</router-link>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style>
#home {
  background: black;
  padding: 5%;
}
</style>