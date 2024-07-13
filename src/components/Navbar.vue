<script>
import '@fortawesome/fontawesome-free/css/all.css'
</script>

<template>
  <div class="navbar">
    <div class="logo">
      <h1><i class="fab fa-github"></i>Alaba's GitHub Page</h1>
    </div>
    <div class="navbarmenu">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/:pathMatch(.*)*" class="link">404 Page</router-link>
      <router-link to="/Errorpage.vue/" class="link">Error Boundary</router-link>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(81, 10, 245);
  max-width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.274);
  height: 90px;
  max-width: 100%;
  color: rgb(255, 255, 255);
  justify-content: center;
}
i {
  padding-right: 20px;
}

h1 {
  font-size: 2rem;
}
.navbarmenu {
  color: black;
  margin-top: 30px;
  padding: 0 20px;
}

.link {
  margin: 0;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 25px;
  color: #ffff;
}
</style>
