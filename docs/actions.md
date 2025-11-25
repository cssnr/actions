---
title: Actions
prev:
  text: Get Help
  link: /support
---

# Actions

The following actions are documented on this site.

<ActionList />

These actions are currently documented off-site.

- [Stack Deploy Action](https://docker-deploy.cssnr.com/)
- [Portainer Stack Deploy Action](https://portainer-deploy.cssnr.com/)

&nbsp;

Don't see what you need? Request a [new GitHub Action](https://github.com/cssnr/actions/discussions/categories/github-actions).

[![Request Action](https://img.shields.io/badge/request_a_github_action-blue?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/cssnr/actions/discussions/categories/github-actions)

## Published Actions

This is an exclusive list of Actions Published on the Marketplace.

<GitHubTable title="Published" :repos="actions.published" />

_Looking for more? Checkout the [Unpublished](development.md#unpublished-actions) and [Template](development.md#template-actions) Actions._

<!--suppress ES6UnusedImports -->
<script setup>
import actions from '../.vitepress/scripts/actions.js'
</script>

## Action Categories

These are the same actions from the [Published Actions](#published-actions) list, split into categories.

#### Docker

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)

#### Vendor Specific

- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Zensical Action](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)

#### Version Tags

- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)

#### JSON/TOML Tools

- [TOML Action](https://github.com/cssnr/toml-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)

#### Release

- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)

#### Issues

- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)

#### Generic

- [Actions Up Action](https://github.com/cssnr/actions-up-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)

&nbsp;

::: warning Work in Progress
This site is a Work in Progress and will eventually host the documentation for all actions.
:::
