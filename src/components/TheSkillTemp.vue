<script setup>
defineProps(['skillName', 'skillPercent'])
</script>

<template>
   <h4>{{ skillName }} , {{ skillPercent }}%</h4>
</template>