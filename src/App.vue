<template>
  <div id="app">
    <h1 id="nav">
      <router-link to="/">StarFindr</router-link>
    </h1>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: black;
  width: 100vw;
  height: 100vh;
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: white;
  font-size: 2.5em;
  font-family: "Press Start 2P", cursive;
}

@media (max-width: 600px) {
  a:link,
  a:visited,
  a:hover,
  a:active {
    font-size: 1.2em !important;
  }
}

@media (max-width: 1000px) {
  a:link,
  a:visited,
  a:hover,
  a:active {
    font-size: 2em !important;
  }
}

h1 {
  margin: 5%;
  padding: 7%;
}

.h1 a {
  font-size: 8vw !important;
}
</style>
