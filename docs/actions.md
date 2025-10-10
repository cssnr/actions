---
prev:
  text: Get Help
  link: /support
title: Actions
---

# Actions

The following actions are documented on this site.

- [VirusTotal Action](./virustotal/index.md)

These actions are currently hosted off-site.

- [Stack Deploy Action](https://docker-deploy.cssnr.com/)
- [Portainer Stack Deploy Action](https://portainer-deploy.cssnr.com/)

::: info
This site is a Work in Progress.
Currently, the only documented action is [VirusTotal Action](./virustotal/index.md).

Once templating is complete, I will document more actions and merge both
[Stack Deploy](https://docker-deploy.cssnr.com/) and the [Portainer Deploy](https://portainer-deploy.cssnr.com/)
docs into this site.
:::

## Published Actions

This is an exclusive list of Actions Published on the Marketplace.

<GitHubTable title="Published" :repos="actions.published" />

_Looking for more? Checkout the [Unpublished](development.md#unpublished-actions) and [Template](development.md#template-actions) Actions._

<!--suppress ES6UnusedImports -->
<script setup>
import actions from '../.vitepress/scripts/actions.js'
</script>
