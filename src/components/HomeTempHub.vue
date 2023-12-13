<script setup>
import HomeTemp from './HomeTemp.vue'
</script>

<template>
  <HomeTemp>
    <template #heading>
      <h3>Knowledge must and have to be kept at all costs. Life is an never ending experience.</h3>
    </template>

    <template #content>
      <article class="baseContent home">
        <p>My work will be shown in here, fun or serious ones. Web langage used in here, HTML5, CSS3 (Scss) & JS (VueJs). There will be no PHP here, a MVC project alike will be made soon to manage more dynamic content.</p>
        <p>Useful informations are in the other pages of the website, <b><RouterLink to="/about"><u>About</u></RouterLink></b> and <b><RouterLink to="/creativity"><u>Creativity</u></RouterLink></b>.</p>
        <p>Feel free to contact me if you are in need, there are many contact links at the bottom of the page.</p>
      </article>
    </template>
  </HomeTemp>
</template>
