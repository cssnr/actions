<script setup>
import sidebar from '../../sidebars/index.js'
</script>

<template>
  <ul>
    <li v-for="link in sidebar.items" :key="link.href">
      <a :href="link.link">{{ link.text }}</a>
    </li>
  </ul>
</template>
