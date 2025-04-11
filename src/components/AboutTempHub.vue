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
        const res = await fetch("https://api.github.com/repos/Matthias-Geslin/main/languages");
        const finalRes = await res.json();
        this.listItems = finalRes;
        var totalValue = [finalRes][0]["Vue"]+[finalRes][0]["HTML"]+[finalRes][0]["CSS"]+[this.listItems][0]["JavaScript"];
        
        // get bytes data to % float 2 decimals
        var vueValue = (([finalRes][0]["Vue"] / totalValue)*100).toFixed(2);
        var cssValue = (([finalRes][0]["CSS"] / totalValue)*100).toFixed(2);
        var jsValue = (([finalRes][0]["JavaScript"] / totalValue)*100).toFixed(2);
        var htmlValue = (([finalRes][0]["HTML"] / totalValue)*100).toFixed(2);

        this.listItems = [["Vue",vueValue,"green"], ["Css", cssValue,"blue"], ["JS", jsValue, "goldenrod"] ,["Html", htmlValue, "coral"]];
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
          <h3>About me & Abilities</h3>
        </template>

        <template #content>
          <article class="baseContent">
            <p>Likes IT at many levels, creativity in art as digital or paper work. Keep having fun while developing or making new stuff on a computer.</p>
          </article>
        </template>
    </AboutTemp>

  <div class="box">
    <ul>
      <li>Languages used:</li>
      <li v-for="value in listItems">
        <div class="lang">
          <div class="bar">
            <div class="progress" v-bind:style="{background:value[2],'width': value[1] + '%'}">
              {{ value[0] }}<span class="percent">{{ value[1] }}%</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>