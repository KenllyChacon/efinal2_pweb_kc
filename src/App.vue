<template>
  <nav>
    | <router-link to="/">Home</router-link>
    | <router-link to="/about">About</router-link>
    | <router-link to="/ingresar_producto">Ingresar Producto</router-link>
    | <router-link to="/realizar_venta">Realizar venta</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
