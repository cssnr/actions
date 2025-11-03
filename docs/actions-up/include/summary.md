PR Comment: [#25](https://github.com/smashedr/js-test-action/pull/25#issuecomment-3478545861)

---

Scanned 8 workflows, checked 13 actions and found 6 updates.

<details open><summary>Results</summary>

| Name                                                                                    | File                                                                                                               | Breaking | Latest |
| :-------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :------: | :----: |
| [cssnr/check-build-action](https://github.com/cssnr/check-build-action)                 | [check-build.yaml](https://github.com/smashedr/js-test-action/blob/updates/.github/workflows/check-build.yaml#L48) |    -     | v1.1.0 |
| [cssnr/label-creator-action](https://github.com/cssnr/label-creator-action)             | [labeler.yaml](https://github.com/smashedr/js-test-action/blob/updates/.github/workflows/labeler.yaml#L40)         |    -     | v1.0.2 |
| [cssnr/mirror-repository-action](https://github.com/cssnr/mirror-repository-action)     | [mirror.yaml](https://github.com/smashedr/js-test-action/blob/updates/.github/workflows/mirror.yaml#L26)           |    -     | v1.2.0 |
| [cssnr/update-version-tags-action](https://github.com/cssnr/update-version-tags-action) | [release.yaml](https://github.com/smashedr/js-test-action/blob/updates/.github/workflows/release.yaml#L19)         |    -     | v1.3.1 |
| [cssnr/package-changelog-action](https://github.com/cssnr/package-changelog-action)     | [release.yaml](https://github.com/smashedr/js-test-action/blob/updates/.github/workflows/release.yaml#L36)         |    ⚠️    | v2.0.0 |
| [cssnr/update-version-tags-action](https://github.com/cssnr/update-version-tags-action) | [tags.yaml](https://github.com/smashedr/js-test-action/blob/updates/.github/workflows/tags.yaml#L21)               |    -     | v1.3.1 |

</details>

---

<details><summary>Actions</summary>

```json
[
  {
    "type": "external",
    "name": "cssnr/check-build-action",
    "version": "v1",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/check-build.yaml",
    "line": 48
  },
  {
    "type": "external",
    "name": "cssnr/label-creator-action",
    "version": "v1",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/labeler.yaml",
    "line": 40
  },
  {
    "type": "external",
    "name": "ataylorme/eslint-annotate-action",
    "version": "d57a1193d4c59cbfbf3f86c271f42612f9dbd9e9",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/lint.yaml",
    "line": 86
  },
  {
    "type": "external",
    "name": "cssnr/mirror-repository-action",
    "version": "v1",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/mirror.yaml",
    "line": 26
  },
  {
    "type": "external",
    "name": "cssnr/npm-outdated-action",
    "version": "master",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/pull.yaml",
    "line": 44
  },
  {
    "type": "external",
    "name": "cssnr/actions-up-action",
    "version": "master",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/pull.yaml",
    "line": 48
  },
  {
    "type": "external",
    "name": "cssnr/update-version-tags-action",
    "version": "v1",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/release.yaml",
    "line": 19
  },
  {
    "type": "external",
    "name": "smashedr/update-release-notes-action",
    "version": "master",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/release.yaml",
    "line": 29
  },
  {
    "type": "external",
    "name": "cssnr/package-changelog-action",
    "version": "v1",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/release.yaml",
    "line": 36
  },
  {
    "type": "external",
    "name": "sarisia/actions-status-discord",
    "version": "11a0bfe3b50977e38aa2bd4a4ebd296415e83c19",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/release.yaml",
    "line": 40
  },
  {
    "type": "external",
    "name": "cssnr/update-version-tags-action",
    "version": "v1",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/tags.yaml",
    "line": 21
  },
  {
    "name": "./",
    "type": "local",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/test.yaml",
    "line": 55
  },
  {
    "type": "external",
    "name": "sarisia/actions-status-discord",
    "version": "11a0bfe3b50977e38aa2bd4a4ebd296415e83c19",
    "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/test.yaml",
    "line": 69
  }
]
```

</details>

<details><summary>Updates</summary>

```json
[
  {
    "currentVersion": "v1",
    "latestVersion": "v1.1.0",
    "isBreaking": false,
    "latestSha": "b31a53ea9332664a79d0a84755de7bf2ff8cbd42",
    "hasUpdate": true,
    "action": {
      "type": "external",
      "name": "cssnr/check-build-action",
      "version": "v1",
      "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/check-build.yaml",
      "line": 48
    }
  },
  {
    "currentVersion": "v1",
    "latestVersion": "v1.0.2",
    "isBreaking": false,
    "latestSha": "fc7d9fa6a9e27c561a2bb802a9d2a8f21682279d",
    "hasUpdate": true,
    "action": {
      "type": "external",
      "name": "cssnr/label-creator-action",
      "version": "v1",
      "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/labeler.yaml",
      "line": 40
    }
  },
  {
    "currentVersion": "v1",
    "latestVersion": "v1.2.0",
    "isBreaking": false,
    "latestSha": "2af5bf347684245f52b5f56502956a57f9b8813e",
    "hasUpdate": true,
    "action": {
      "type": "external",
      "name": "cssnr/mirror-repository-action",
      "version": "v1",
      "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/mirror.yaml",
      "line": 26
    }
  },
  {
    "currentVersion": "v1",
    "latestVersion": "v1.3.1",
    "isBreaking": false,
    "latestSha": "06ac3e56e828129c17054b39d11317584af1bd88",
    "hasUpdate": true,
    "action": {
      "type": "external",
      "name": "cssnr/update-version-tags-action",
      "version": "v1",
      "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/release.yaml",
      "line": 19
    }
  },
  {
    "currentVersion": "v1",
    "latestVersion": "v2.0.0",
    "isBreaking": true,
    "latestSha": "3fe5182f279f89ada632b35b7f2ed281a4b84e39",
    "hasUpdate": true,
    "action": {
      "type": "external",
      "name": "cssnr/package-changelog-action",
      "version": "v1",
      "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/release.yaml",
      "line": 36
    }
  },
  {
    "currentVersion": "v1",
    "latestVersion": "v1.3.1",
    "isBreaking": false,
    "latestSha": "06ac3e56e828129c17054b39d11317584af1bd88",
    "hasUpdate": true,
    "action": {
      "type": "external",
      "name": "cssnr/update-version-tags-action",
      "version": "v1",
      "file": "/home/runner/work/js-test-action/js-test-action/.github/workflows/tags.yaml",
      "line": 21
    }
  }
]
```

</details>

<details><summary>Inputs</summary>

```yaml
path: '.'
heading: '### Actions Up'
open: true
columns: ['n', 'f', 'b', 'l']
exclude: 'actions/.*'
fail: false
summary: true
```

</details>
