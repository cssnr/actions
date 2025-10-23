[![GitHub Deployments](https://img.shields.io/github/deployments/cssnr/actions/github-pages?logo=github&label=deploy)](https://github.com/cssnr/actions/deployments)
[![GitHub Pages](https://img.shields.io/github/actions/workflow/status/cssnr/actions/pages.yaml?logo=cachet&label=pages)](https://github.com/cssnr/actions/actions/workflows/pages.yaml)
[![GitHub Lint](https://img.shields.io/github/actions/workflow/status/cssnr/actions/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/actions/actions/workflows/lint.yaml)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/actions?logo=vitepress&logoColor=white&label=updated)](https://github.com/cssnr/actions/pulse)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/cssnr/actions?logo=github)](https://github.com/cssnr/actions/graphs/contributors)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/actions?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/actions)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/actions?logo=github)](https://github.com/cssnr/actions/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/actions?style=flat&logo=github)](https://github.com/cssnr/actions)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# GitHub Actions

This is a work in progress. The goal is to be a documentation site for all the GitHub Actions.

Currently, each "site" is seperated into a folder, with its own [sidebar](.vitepress/sidebars) configuration.

## Documented Actions

- [VirusTotal Action](https://actions.cssnr.com/virustotal/) - [docs](docs/virustotal)

## Documentation Layout

These [docs](docs) are **written in plain text** using Markdown and built with [VitePress](https://vitepress.dev/).

| Location                                                   | Description                                                                            |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [docs](docs)                                               | Documentation Root (Markdown files)                                                    |
| [docs/public](docs/public)                                 | Static Root (copied to docs root)                                                      |
| [docs/index.md](docs/index.md)                             | Special [VitePress Home Page](https://vitepress.dev/reference/default-theme-home-page) |
| [.vitepress](.vitepress)                                   | VitePress Configuration Root                                                           |
| [.vitepress/config.mts](.vitepress/config.mts)             | VitePress Configuration File                                                           |
| [.vitepress/scripts](.vitepress/scripts)                   | Custom Scripts Root                                                                    |
| [.vitepress/sidebars](.vitepress/sidebars)                 | Sidebar Configuration Root                                                             |
| [.vitepress/theme](.vitepress/theme)                       | VitePress Custom Theme Root                                                            |
| [.vitepress/theme/index.js](.vitepress/theme/index.js)     | VitePress Custom Theme File                                                            |
| [.vitepress/theme/custom.css](.vitepress/theme/custom.css) | VitePress Global CSS File                                                              |
| [.vitepress/theme/components](.vitepress/theme/components) | VitePress Components Root                                                              |

## Development

To get started, clone the repository and run `npm i` then `npm run dev`.

```shell
npm install
npm run dev
```

The site should now be available at: http://localhost:5173/

- [VitePress CLI Reference](https://vitepress.dev/reference/cli)
- [VitePress Markdown Reference](https://vitepress.dev/guide/markdown)

# Contributing

For instructions on modifying the documentation see the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [js-test-action](https://github.com/smashedr/js-test-action?tab=readme-ov-file#readme) - JavaScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Python
- [ts-test-action](https://github.com/smashedr/ts-test-action?tab=readme-ov-file#readme) - TypeScript
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)
