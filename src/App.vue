<template>
  <div id="app">
    <div id="nav" class="nav-bar">
      <router-link to="/" class="nav-item">Home</router-link>|
      <router-link to="/">Account</router-link>|
    </div>
    <router-view/>
  </div>
</template>
<style>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}
/* .nav-item {
  display: block;
} */
</style>
