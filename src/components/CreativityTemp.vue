<script setup>
import { reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import i18n from '../i18n';

const images = reactive([
  {    category: 'professional', file: 'project_01.jpg', alt: 'Image of project 1', titleKey: 'Webagency', descKey: 'creativity.gallery.project01', nakedUrl: 'https://github.com/Matthias-Geslin/Projet_1_Webagency', url: 'https://github.com/Matthias-Geslin/Projet_1_Webagency'  },
  {    category: 'professional', file: 'project_03.jpg', alt: 'Image of project 3', titleKey: 'JavaScript', descKey: 'creativity.gallery.project03', nakedUrl: 'https://github.com/Matthias-Geslin/Project_3_Js', url: 'https://github.com/Matthias-Geslin/Project_3_Js'  },
  {    category: 'professional', file: 'project_04.jpg', alt: 'Image of project 4', titleKey: 'Blog Jean Forteroche', descKey: 'creativity.gallery.project04', nakedUrl: 'https://github.com/Matthias-Geslin/Project_4_Blog', url: 'https://github.com/Matthias-Geslin/Project_4_Blog'  },
  {    category: 'professional', file: 'pro_01.png', alt: 'Image of a professional one-page', titleKey: "L'HÉROZ'O", descKey: 'creativity.gallery.pro01', nakedUrl: 'https://www.lherozo.fr', url: 'https://www.lherozo.fr'  },
  {    category: 'creative', file: 'procreate_01.png', alt: 'Screenshot from Procreate', titleKey: 'Procreate', descKey: 'creativity.gallery.procreatePanels'  },
  {    category: 'creative', file: 'procreate_02.png', alt: 'Screenshot from Procreate', titleKey: 'Procreate', descKey: 'creativity.gallery.procreateLogo'  },
  {    category: 'devFyi', file: 'devFyi_01.png', alt: 'Screenshot of a website I made', titleKey: 'MatthMyStream', descKey: 'creativity.gallery.livestream', nakedUrl: 'https://stream.matthmoiça.fr', url: 'https://stream.matthmoiça.fr'  },
  {    category: 'devFyi', file: 'devFyi_02.png', alt: 'Screenshot of a Discord server', titleKey: 'MatthMoiÇa Discord', descKey: 'creativity.gallery.discordServer', nakedUrl: 'https://discord.gg/HFxq2UVeqa', url: 'https://discord.gg/HFxq2UVeqa'  },
  {    category: 'devFyi', file: 'devFyi_03.png', alt: 'Screenshot of a Bot Integration and the configuration', titleKey: 'MatthMyBot', descKey: "creativity.gallery.discordBot", nakedUrl: 'https://github.com/Matthias-Geslin/MatthMyBot', url: 'https://github.com/Matthias-Geslin/MatthMyBot'  }
])

function removeHttps() {
  images.forEach(image => {
    if (image.nakedUrl) {
      image.nakedUrl = image.nakedUrl.replace(/^https?:\/\/(www\.)?/, '');
    }
  });
}

function imagesShown() {
  return images.length > 0 ? images.length : '';
}

onMounted(() => {
  removeHttps();
})
</script>

<template>
    <input class="hide" id="all" type="radio" name="creativity" checked>
    <input class="hide" id="professional" name="creativity" type="radio" value="professional">
    <input class="hide" id="creative" name="creativity" type="radio" value="creativity">
    <input class="hide" id="devFyi" name="creativity" type="radio" value="devFyi">

  <h3>{{ $t('creativity.title.firstPart') }} {{ imagesShown() }} {{ $t('creativity.title.secondPart') }}</h3>

  <menu class="menu">
    <label for="all">{{ $t('creativity.menu.labelAll') }}</label>
    <label for="professional">{{ $t('creativity.menu.labelPro') }}</label>
    <label for="creative">{{ $t('creativity.menu.labelCrea') }}</label>
    <label for="devFyi">{{ $t('creativity.menu.labelDev') }}</label>
  </menu>

  <figure class="gallery">
    <figure v-for="image in images" :class="'all ' + image.category">   
      <img :id="image.category" :name="image.titleKey" :src="'/images/' + image.file" :alt="image.alt" />
      <figcaption>
        <h3>{{ image.titleKey }}</h3>
        <p>{{ t(image.descKey) }}</p>
        <a v-if="image.url" :href="image.url">{{  image.nakedUrl }}</a>
      </figcaption>
    </figure>
  </figure>
</template>