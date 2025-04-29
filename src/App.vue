<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router"

import Tr from "@/i18n/translation"
import TheFoot from './components/TheFoot.vue';

const { t, locale } = useI18n();
const userTheme = ref('');

function getMediaPreference() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'darkMode' : 'lightMode';
}

function initTheme() {
  const savedTheme = localStorage.getItem('user-theme');
  userTheme.value = savedTheme || getMediaPreference();
  document.documentElement.classList.toggle('darkMode', userTheme.value === 'darkMode');
}

function toggleTheme() {
  userTheme.value = userTheme.value === 'darkMode' ? 'lightMode' : 'darkMode';
  localStorage.setItem('user-theme', userTheme.value);
  document.documentElement.classList.toggle('darkMode');
}


const supportedLocales = Tr.supportedLocales
const router = useRouter()
const switchLanguage = async (event) => { 
        const newLocale = event.target.value 
        await Tr.switchLanguage(newLocale) 
        try {
          await router.replace({ params: { locale: newLocale } })
        } catch(e) {
          console.log(e)
          router.push("/")
        }
      }

onMounted(() => {
  initTheme();
});
</script>


<template>
  <header>
      <nav>
        <RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{  $t('nav.home') }}</RouterLink>
        <RouterLink :to="Tr.i18nRoute({ name: 'about' })">{{ $t("nav.about") }}</RouterLink>
        <RouterLink :to="Tr.i18nRoute({ name: 'creativity' })">{{ $t("nav.creativity") }}</RouterLink>
        
        <select @change="switchLanguage">
          <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale" :selected="locale === sLocale">
            {{ t(`locale.${sLocale}`) }}
          </option>
        </select>

        <div>
          <input
            @change="toggleTheme"
            id="checkbox"
            type="checkbox"
            class="switch-checkbox"
          />
          <label for="checkbox" class="switch-label">
            <span>🌙</span>
            <span>☀️</span>
            <div
              class="switch-toggle"
              :class="{ 'switch-toggle-checked': userTheme === 'darkMode' }"
            ></div>
          </label>
        </div>
      </nav>
  </header>
  <RouterView />
  
  <TheFoot />
</template>