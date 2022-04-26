<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/Occupation">Occupation</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('allEpisodes');
    },
  }
</script>

<style>
*{  
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background-color: #f0f0f0;
}

#nav {
  padding: 30px;
  text-align: center;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #75bd99;
}

.point {
  cursor: pointer;
}
.btn{
  display: inline-block;
  background-color: #75bd99;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px 0;
  cursor: pointer;
}
.btn:hover{
  background-color: rgba(72, 169, 72, 0.8);
  transition: all 1s ease-out;
}
.card-title{
  padding: 10px 0;
}
.card-text{
  padding: 5px 0;
}
</style>
