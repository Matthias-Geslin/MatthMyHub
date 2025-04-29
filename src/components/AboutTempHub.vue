<script setup>
import AboutTemp from './AboutTemp.vue'

</script>

<script>
  export default {
    data() {
      return {
        listItems: []
      }
    },
    methods: {
      async getData() {
        const res = await fetch("https://api.github.com/repos/Matthias-Geslin/MatthMyHub/languages");
        const finalRes = await res.json();
        this.listItems = finalRes;
        var totalValue = [finalRes][0]["Vue"]+[finalRes][0]["HTML"]+[finalRes][0]["CSS"]+[this.listItems][0]["JavaScript"];
        
        // get bytes data to % float 2 decimals
        var vueValue = (([finalRes][0]["Vue"] / totalValue)*100).toFixed(2);
        var cssValue = (([finalRes][0]["CSS"] / totalValue)*100).toFixed(2);
        var jsValue = (([finalRes][0]["JavaScript"] / totalValue)*100).toFixed(2);
        var htmlValue = (([finalRes][0]["HTML"] / totalValue)*100).toFixed(2);

        this.listItems = [["Vue",vueValue,"color-s-one"], ["Css", cssValue,"color-s-two"], ["JS", jsValue, "color-s-three"] ,["Html", htmlValue, "color-s-four"]];
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<template>
  <AboutTemp>
      <template #heading>
        <h3>{{ $t('about.title') }}</h3>
      </template>

      <template #content>
        <article class="baseContent">
          <p>{{ $t('about.content.myExperience') }}</p>
          <p>{{ $t('about.content.websiteObjective') }}<a href="https://stream.matthmoiça.fr/"><i class="fa-brands fa-twitch"></i>Twitch</a></p>
        </article>

        <div class="box baseContent">
          <ul class="ul-lang">
            <li>{{ $t('about.langages') }}</li>
            <li class="li-lang" v-for="value in listItems">
              <div class="lang">
                <div class="bar">
                  <span class="percent">{{ value[0] }}: {{ value[1] }}%</span>
                  <div :class="'progress ' + value[2]" v-bind:style="{'width': value[1] + '%' }">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </template>
  </AboutTemp>

  
</template>