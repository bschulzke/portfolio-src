<template>
  <nav>
    <router-link to="/">Projects</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact Me</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.desktop {
  display: none;
}
nav {
  padding: 2rem;
  padding-bottom: 3rem;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  text-align: right;
  height: 1rem;
  background-image: linear-gradient(to bottom right, rgb(9,91,118), rgb(3, 39, 51));
  color: white;
  text-decoration: none;
}

a {
  color: #bbf0f1;
  margin-bottom: 0.5rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #bbf0f1;
  font-weight: bold;
  text-decoration: underline;
}

h1 {
  font-weight: normal;
  font-size: 2rem;
  text-align: left;
}
h2 {
  font-weight: normal;
  text-align: left;
}
p {
  text-align: left;
}
</style>
