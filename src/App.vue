<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheTop from './components/TheTop.vue'
import TheFoot from './components/TheFoot.vue';
</script>

<template>
  <header>
      <TheTop msg="🛁 MatHub" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/creativity">Creativity</RouterLink>
      </nav>
  </header>

  <RouterView />
  
  <TheFoot />
</template>