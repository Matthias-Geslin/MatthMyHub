<script setup>
import HomeTemp from './HomeTemp.vue'
</script>

<template>
  <HomeTemp>
    <template #heading>
      <figure class="fig-head-quote">
        <img src="/images/img_01.png" :alt="$t('home.headFigure.imageAlt')"> 
        <figcaption>
          <blockquote>{{ $t('home.headFigure.figcaption.quote') }}</blockquote>
          <p>{{ $t('home.headFigure.figcaption.p') }}</p>
        </figcaption>
      </figure>
    </template>

    <template #content>
      <article class="baseContent home">
        <p>{{ $t('home.content.pDescription') }}</p>
        <p>{{ $t('home.content.pInfo') }}</p>
        <p>{{ $t('home.content.pContact') }}</p>
      </article>

      
    </template>
  </HomeTemp>
</template>
