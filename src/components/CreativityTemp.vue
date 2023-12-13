<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "src/assets/images/project_1.jpg",
        "src/assets/images/project_3.jpg",
        "src/assets/images/project_4.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.currentIndex;
    },

    next: function(interval) {
      this.stop();
        if(typeof interval === "number" && (interval % 1) === 0) {
          var context = this;
          this.run = setTimeout(function() {
              context.next(interval);
          }, interval);
      }

      if (this.currentIndex === this.images.length -1) {
        this.currentIndex = 0;
      }else {
          this.currentIndex ++;
      }
    },

    prev: function(interval) {
      this.stop();
      if(typeof interval === "number" && (interval % 1) === 0) {
        var context = this;
        this.run = setTimeout(function() {
            context.prev(interval);
        }, interval);
    }

      if (this.currentIndex === 0) {
          this.currentIndex = this.images.length -1;
      }else {
          this.currentIndex --;
      }
    },

    play: function() {
      this.next(5000);
    },

    stop: function() {
      clearInterval(this.run);
    },
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<template>
  <h3>Original creator of these technical & design projects below.</h3>
  <picture>
    <img :src="currentImg" v-for="i in [currentIndex]" :key="i"/>

    <span class="controls">
      <a class="prev" @click="prev()" href="#"><i class="fa-solid fa-chevron-left"></i></a>
      <a class="play" @click="play()" href="#"><i class="fa-solid fa-play"></i></a>
      <a class="stop" @click="stop()" href="#"><i class="fa-solid fa-pause"></i></a>
      <a class="next" @click="next()" href="#"><i class="fa-solid fa-chevron-right"></i></a>
    </span>
  </picture>
</template>
