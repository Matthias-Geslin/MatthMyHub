<script setup>
import AboutTemp from './AboutTemp.vue'
import SkillTemp from './TheSkillTemp.vue'
import TheImageTemp from '../components/TheImageTemp.vue'

const skillBar = ([
        {id:1, skillName:'HTML5', skillPercent:'undefined'},
        {id:2, skillName:'CSS3', skillPercent:'undefined'},
        {id:3, skillName:'Vue', skillPercent:'undefined'}
    ])
</script>

<template>
    <AboutTemp>
        <template #heading>About me & Abilities</template>
        <template #content>Likes IT at many levels, creativity in art as digital or paper work. Keep having fun while developing or making new stuff on a computer.</template>
    </AboutTemp>

    <TheImageTemp
        defineSrc="https://img.shields.io/github/languages/count/Matthias-Geslin/main?style=for-the-badge&logo=vuedotjs"
        defineAlt="GitHub language count">
    </TheImageTemp>

    <TheImageTemp 
        defineSrc="src/assets/images/CV.pdf" 
        defineAlt="Picture of my current updated CV.">
    </TheImageTemp>

    <SkillTemp
        v-for="prop in skillBar" 
        :key="prop.id" 
        :skillName="prop.skillName"
        :skillPercent="prop.skillPercent">
    </SkillTemp>
</template>