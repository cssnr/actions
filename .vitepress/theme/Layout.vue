<script setup>
import DefaultTheme from 'vitepress/theme'

import HomeFeaturesAfter from './components/HomeFeaturesAfter.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
      <HomeFeaturesAfter />
    </template>
  </Layout>
</template>

<!--suppress CssUnusedSymbol -->
<!--<style scoped></style>-->
