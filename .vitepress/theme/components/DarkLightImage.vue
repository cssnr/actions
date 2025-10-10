<script setup>
// Props
const props = defineProps({
  light: { type: String, required: true },
  dark: { type: String, required: true },
  alt: { type: String, default: null },
  href: { type: String, default: null },
})

const tag = props.href ? 'a' : 'span'
const attrs = props.href ? { href: props.href, target: '_blank', rel: 'noopener' } : {}

// <DarkLightImage
//     light="./public/images/ko-fi-dark.png"
//     dark="./public/images/ko-fi-light.png"
//     href="https://ko-fi.com/cssnr"
//     alt="Support Us on Ko-Fi"
// />
</script>

<template>
  <component :is="tag" v-bind="attrs" style="display: inline-block">
    <picture>
      <source media="(prefers-color-scheme: dark)" :srcset="props.dark" />
      <img :src="props.light" :alt="props.alt" />
    </picture>
  </component>
</template>
