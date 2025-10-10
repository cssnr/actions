<script setup>
// Props
const props = defineProps({
  owner: { type: String, required: true },
  repo: { type: String, required: true },
})

const name = `${props.owner}/${props.repo}`

const badges = [
  {
    src: `https://img.shields.io/github/v/tag/${name}?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20`,
    href: `https://github.com/${name}/tags`,
  },
  {
    src: `https://img.shields.io/github/v/tag/${name}?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20`,
    href: `https://github.com/${name}/releases`,
  },
  {
    src: `https://img.shields.io/github/v/release/${name}?logo=git&logoColor=white&labelColor=585858&label=%20`,
    href: `https://github.com/${name}/releases/latest`,
  },
  // {
  //   src: `https://img.shields.io/github/size/${name}/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size`,
  //   href: `https://github.com/${name}/blob/master/src`,
  // },
  // {
  //   src: `https://img.shields.io/github/actions/workflow/status/${name}/release.yaml?logo=cachet&label=release`,
  //   href: `https://github.com/${name}/actions/workflows/release.yaml`,
  // },
  // {
  //   src: `https://img.shields.io/github/actions/workflow/status/${name}/test.yaml?logo=cachet&label=test`,
  //   href: `https://github.com/${name}/actions/workflows/test.yaml`,
  // },
  {
    src: `https://img.shields.io/github/actions/workflow/status/${name}/lint.yaml?logo=cachet&label=lint`,
    href: `https://github.com/${name}/actions/workflows/lint.yaml`,
  },
  {
    src: `https://sonarcloud.io/api/project_badges/measure?project=${props.owner}_${props.repo}&metric=alert_status`,
    href: `https://sonarcloud.io/summary/new_code?id=${props.owner}_${props.repo}`,
  },
  {
    src: `https://img.shields.io/github/last-commit/${name}?logo=github&label=updated`,
    href: `https://github.com/${name}/pulse`,
  },
  // {
  //   src: `https://img.shields.io/gitea/last-commit/${name}/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated`,
  //   href: `https://codeberg.org/${name}`,
  // },
  {
    src: `https://img.shields.io/github/contributors/${name}?logo=github`,
    href: `https://github.com/${name}/graphs/contributors`,
  },
  {
    src: `https://img.shields.io/github/repo-size/${name}?logo=bookstack&logoColor=white&label=repo%20size`,
    href: `https://github.com/${name}?tab=readme-ov-file#readme`,
  },
  {
    src: `https://img.shields.io/github/languages/top/${name}?logo=htmx`,
    href: `https://github.com/${name}`,
  },
  {
    src: `https://img.shields.io/github/discussions/${name}?logo=github`,
    href: `https://github.com/${name}/discussions`,
  },
  {
    src: `https://img.shields.io/github/forks/${name}?style=flat&logo=github`,
    href: `https://github.com/${name}/forks`,
  },
  {
    src: `https://img.shields.io/github/stars/${name}?style=flat&logo=github`,
    href: `https://github.com/${name}/stargazers`,
  },
]
</script>

<template>
  <div class="badges">
    <a v-for="{ src, href } in badges" :key="src" :href="href" target="_blank" rel="noopener">
      <img :src="src" alt="Badge" />
    </a>
  </div>
</template>

<style scoped>
.badges {
  margin-top: 16px;
  /*text-align: center;*/
}

.badges img {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  margin-right: 4px;
  margin-bottom: 2px;
}
.badges img:hover {
  transform: scale(1.04);
}
</style>
