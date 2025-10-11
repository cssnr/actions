<script setup>
const props = defineProps({
  repo: { type: String, required: true },
})
const href = `https://github.com/${props.repo}/releases`
const src = `https://img.shields.io/github/v/release/${props.repo}?style=for-the-badge&logo=github&label=latest%20version`
</script>

<template>
  <a :href="href" target="_blank" rel="noopener">
    <img alt="GitHub Release" :src="src" />
  </a>
</template>

<!--<style scoped></style>-->
