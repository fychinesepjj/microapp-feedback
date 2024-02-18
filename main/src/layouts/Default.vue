<template>
  <h3>Default Layout</h3>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/micro-app/about/">子应用</router-link>
  </nav>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
  export default {
    name: 'DefaultLayout',
    methods: {
      clearApp() {
        window.$microApp.unmountApp('abc', { clearAliveState: true, destroy: false })
      }
    }
  }
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
