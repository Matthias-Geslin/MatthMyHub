<script setup>
import HomeTemp from './HomeTemp.vue'
</script>

<template>
  <HomeTemp>
    <template #heading>
      <blockquote>Knowledge must and have to be kept at all costs. Life is an never ending experience.</blockquote>
    </template>

    <template #content>
      <article class="baseContent home">
        <p>My work will be shown in here, fun and serious ones. With a professional aspect or just on my creative thoughts, my passion will go through.</p>
        <p>Informations <b><RouterLink to="/about"><u>about</u></RouterLink></b> me and the <b><RouterLink to="/creativity"><u>creative</u></RouterLink></b> aspect are rendered.</p>
        <p>Feel free to contact me for job offers or reviews both are important enough to be heard. There are a few contact links at the bottom of the page.</p>
      </article>
    </template>
  </HomeTemp>
</template>
