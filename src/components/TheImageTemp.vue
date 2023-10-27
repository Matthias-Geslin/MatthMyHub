<script setup>
defineProps({
    defineSrc: {
        type: String
  },
    defineAlt: {
        type: String
    }
})
</script>

<template>
    <img class="defineImg" :src="defineSrc" :alt="defineAlt">
</template>