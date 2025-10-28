<script setup>
// Props
const props = defineProps({
  owner: { type: String, required: true },
  repo: { type: String, required: true },
  name: { type: String, default: null },
  image: { type: String, default: null },
})

const repo = `${props.owner}/${props.repo}`

let badges = [
  {
    src: `https://img.shields.io/github/v/tag/${repo}?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20`,
    href: `https://github.com/${repo}/tags`,
  },
  {
    src: `https://img.shields.io/github/v/tag/${repo}?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20`,
    href: `https://github.com/${repo}/releases`,
  },
  {
    src: `https://img.shields.io/github/v/release/${repo}?logo=git&logoColor=white&labelColor=585858&label=%20`,
    href: `https://github.com/${repo}/releases/latest`,
  },
  {
    src: `https://badges.cssnr.com/ghcr/size/${props.owner}/${props.image}`,
    href: `https://github.com/${repo}/releases/latest`,
    image: true,
  },
  // {
  //   src: `https://img.shields.io/github/size/${repo}/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size`,
  //   href: `https://github.com/${repo}/blob/master/src`,
  // },
  // {
  //   src: `https://img.shields.io/github/actions/workflow/status/${repo}/release.yaml?logo=cachet&label=release`,
  //   href: `https://github.com/${repo}/actions/workflows/release.yaml`,
  // },
  // {
  //   src: `https://img.shields.io/github/actions/workflow/status/${repo}/test.yaml?logo=cachet&label=test`,
  //   href: `https://github.com/${repo}/actions/workflows/test.yaml`,
  // },
  // {
  //   src: `https://img.shields.io/github/actions/workflow/status/${repo}/lint.yaml?logo=cachet&label=lint`,
  //   href: `https://github.com/${repo}/actions/workflows/lint.yaml`,
  // },
  // {
  //   src: `https://sonarcloud.io/api/project_badges/measure?project=${props.owner}_${props.repo}&metric=alert_status`,
  //   href: `https://sonarcloud.io/summary/new_code?id=${props.owner}_${props.repo}`,
  // },
  {
    src: `https://img.shields.io/github/last-commit/${repo}?logo=github&label=updated`,
    href: `https://github.com/${repo}/pulse`,
  },
  // {
  //   src: `https://img.shields.io/gitea/last-commit/${repo}/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated`,
  //   href: `https://codeberg.org/${repo}`,
  // },
  {
    src: `https://img.shields.io/github/issues/${repo}?logo=github`,
    href: `https://github.com/${repo}/issues`,
  },
  {
    src: `https://img.shields.io/github/contributors/${repo}?logo=github`,
    href: `https://github.com/${repo}/graphs/contributors`,
  },
  {
    src: `https://img.shields.io/github/repo-size/${repo}?logo=bookstack&logoColor=white&label=repo%20size`,
    href: `https://github.com/${repo}?tab=readme-ov-file#readme`,
  },
  {
    src: `https://img.shields.io/github/languages/top/${repo}?logo=htmx`,
    href: `https://github.com/${repo}`,
  },
  {
    src: `https://img.shields.io/github/discussions/${repo}?logo=github`,
    href: `https://github.com/${repo}/discussions`,
  },
  {
    src: `https://img.shields.io/github/forks/${repo}?style=flat&logo=github`,
    href: `https://github.com/${repo}/forks`,
  },
  {
    src: `https://img.shields.io/github/stars/${repo}?style=flat&logo=github`,
    href: `https://github.com/${repo}/stargazers`,
  },
]

if (!props.image) badges = badges.filter((b) => !b.image)
</script>

<template>
  <div class="badges">
    <div class="badge-links">
      <a :href="`https://github.com/${repo}`" target="_blank" rel="noopener">
        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="https://img.shields.io/badge/github-0d1117?style=for-the-badge&logo=github"
          />
          <img
            src="https://img.shields.io/badge/github-424a53?style=for-the-badge&logo=github"
            alt="GitHub"
          />
        </picture>
      </a>

      <a
        v-if="props.name"
        :href="`https://github.com/marketplace/actions/${props.name}`"
        target="_blank"
        rel="noopener"
      >
        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="
              https://img.shields.io/badge/marketplace-001C4D?style=for-the-badge&logo=githubactions&logoColor=white
            "
          />
          <img
            src="https://img.shields.io/badge/marketplace-033d8b?style=for-the-badge&logo=githubactions&logoColor=white"
            alt="Marketplace"
          />
        </picture>
      </a>
    </div>

    <div style="min-height: 50px">
      <a v-for="{ src, href } in badges" :key="src" :href="href" target="_blank" rel="noopener">
        <img :src="src" alt="Badge" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.badges {
  margin: 12px 0;
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

.badge-links {
  margin: 16px 0;
}
</style>
