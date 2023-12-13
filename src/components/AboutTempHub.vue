<script setup>
import AboutTemp from './AboutTemp.vue'
import TheImageTemp from '../components/TheImageTemp.vue'

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

        this.listItems = [["Vue",vueValue], ["Css", cssValue], ["JavaScript", jsValue] ,["Html", htmlValue]];
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

    <TheImageTemp 
        defineSrc="src/assets/images/CV.pdf" 
        defineAlt="Picture of my current updated CV.">
    </TheImageTemp>

    <div v-for="(value) in listItems">
      <article class="baseContent">
        <p>Le language {{ value[0] }} est présent à {{ value[1] }}%.</p>
      </article>
  </div>
</template>