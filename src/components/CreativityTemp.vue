<script setup>
import { ref, reactive, computed, pushScopeId } from 'vue'

const images = reactive([
  ['professional', 'project_01.jpg', 'Image of project 1, to learn the html and css. Make a front page of the Webagency.', 'Webagency', '', 'Basics of the Html and Css.'],
  ['professional', 'project_03.jpg', 'Image of project 3', 'JavaScript Learning', '','Learn the Javascript via multiple aspects and functions (eg. Slider, Maps, Canvas & Ajax).'],
  ['professional', 'project_04.jpg', 'Image of project 4', 'Blog Jean Forteroche', '','Learn the concept of MVC in PHP and created a blog about that use case.'],
  ['creative', 'procreate_01.png', 'Screenshot from Procreate', 'Procreate', 'Twitch Graphism Panels for contact, links.'],
  ['creative', 'procreate_02.png', 'Screenshot from Procreate', 'Procreate', 'MMC Logo for my web domain.'],
  ['devFyi', 'devFyi_01.png', 'Screenshot of a website I made', 'MatthMyWebsite', 'https://matthmoiça.fr', 'For Livestream and YouTube.'],
  ['devFyi', 'devFyi_02.png', 'Screenshot of a Discord server', 'MatthMoiÇa Discord', 'https://discord.gg/HFxq2UVeqa', 'Server Discord of MatthMoiÇa, server made for the community, fans and whoever wants to join. Made for experimentations purposes.'],
  ['devFyi', 'devFyi_03.png', 'Screenshot of a Bot Integration and the configuration', 'MatthMyBot', 'https://github.com/Matthias-Geslin/MatthMyBot', "MatthMyBot a bot dedicated for MatthMoiÇa's discord server, made by me and for experimentations purposes."]
]) 


function imagesShown() {
  return images.length > 0 ? images.length : '';
}

function idSelector() {
  var selector = document.getElementsByClassName('professional');
}



</script>

<template>
  <menu>
    <ul>
      <li>
        <input @click="idSelector()" id="professionalInput" name="creativity" type="radio" value="professional" checked>
        <label class="" for="professionalInput">Professional</label>
      </li>
      <li>
        <input @click="idSelector('creative')"  id="creativeInput" name="creativity" type="radio" value="creativity">
        <label class="" for="creativeInput">Creative</label>
      </li>
      <li>  
        <input @click="idSelector('devFyi')" id="devFyiInput" name="creativity" type="radio" value="devFyi">
        <label class="" for="devFyiInput">Dev - WIP</label>
      </li>
    </ul>
  </menu>
  
  <h3>Original creator of those {{ imagesShown() }} projects below.</h3>

  <div v-for="image in images">
    <figure id="professional" class="professional" v-if="image[0] === 'professional'">
      
      <img :id="image[0]" :name="image[0]" :src="'/images/' + image[1]" :alt="image[2]" />
    
      <figcaption>
        <h3>{{ image[3] }}</h3>
        <p>{{ image[5] }}</p>
      </figcaption>
    </figure>
    
    <figure id="creative" class="creative" v-else-if="image[0] === 'creative'">
      
      <img :id="image[0]" :name="image[0]" :src="'/images/' + image[1]" :alt="image[2]" />
    
      <figcaption>
        <h3>{{ image[3] }}</h3>
        <p>{{ image[4] }}</p>
      </figcaption>
    </figure>
    
    <figure id="devFyi" class="devFyi" v-else-if="image[0] === 'devFyi'">
      
      <img :id="image[0]" :name="image[0]" :src="'/images/' + image[1]" :alt="image[2]" />
    
      <figcaption>
        <h3>{{ image[3] }}</h3>
        <a :href="image[4]">{{ image[4] }}</a>
        <p>{{ image[5] }}</p>
      </figcaption>
    </figure>
  </div>
</template>