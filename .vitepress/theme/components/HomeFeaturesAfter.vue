<script setup>
const badges = [
  {
    src: 'https://img.shields.io/github/last-commit/cssnr/actions?logo=vitepress&logoColor=white&label=docs&style=for-the-badge&color=blue',
    href: 'https://github.com/cssnr/actions',
  },
  {
    src: 'https://img.shields.io/github/stars/cssnr?logo=github&label=org%20stars&style=for-the-badge',
    href: 'https://github.com/cssnr',
  },
  {
    src: 'https://img.shields.io/github/followers/cssnr?logo=github&logoColor=white&style=for-the-badge',
    href: 'https://github.com/orgs/cssnr/followers',
  },
  {
    src: 'https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da&style=for-the-badge',
    href: 'https://discord.gg/wXy6m2X8wY',
  },
  {
    src: 'https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support&style=for-the-badge',
    href: 'https://ko-fi.com/cssnr',
  },
]
</script>

<template>
  <div class="features-after">
    <div class="badges">
      <a v-for="{ src, href } in badges" :key="src" :href="href" target="_blank" rel="noopener">
        <img :src="src" alt="Badge" />
      </a>
    </div>
    <a href="https://ko-fi.com/cssnr" target="_blank" rel="noopener">
      <img
        alt="Ko-Fi"
        src="https://cdn.prod.website-files.com/5c14e387dab576fe667689cf/685908c3703cde7cd64a0456_Logo-_1.gif"
      />
    </a>
  </div>
</template>

<!--suppress CssUnusedSymbol -->
<style scoped>
.features-after {
  margin-top: 64px;
  padding: 0 24px;
  text-align: center;
}
.features-after .badges img {
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  margin-right: 8px;
  margin-bottom: 8px;
}
.features-after .badges img:hover {
  transform: scale(1.04);
}
.features-after img {
  margin: auto;
  display: inline-block;
  vertical-align: middle;
}
</style>
