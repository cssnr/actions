---
pageClass: outputs-page
title: Outputs Documentation
---

# Outputs

Details about the stack are output for use in additional steps.

| Input&nbsp;Name           | Output&nbsp;Description        |
| :------------------------ | :----------------------------- |
| [hasUpdates](#hasUpdates) | If Updates `true` else `false` |
| [actions](#actions)       | Actions Checked                |
| [updates](#updates)       | Available Updates              |
| [markdown](#markdown)     | Markdown Results               |

See the [Examples](examples.md) section for more options.

### hasUpdates <CB />

A string that is `true` if updates are available, otherwise `false`.

### actions <CB />

JSON Object List of Actions Scanned

<details><summary>View Example</summary>

```json
[
  {
    "type": "external",
    "name": "actions/checkout",
    "version": "v5",
    "file": "/home/runner/work/actions-up-action/actions-up-action/.github/workflows/check-build.yaml",
    "line": 33
  }
]
```

</details>

### updates

JSON Object List of Updated Found

<details><summary>View Example</summary>

```json
[
  {
    "currentVersion": "v1",
    "latestVersion": "v1.15.4",
    "isBreaking": false,
    "latestSha": "11a0bfe3b50977e38aa2bd4a4ebd296415e83c19",
    "hasUpdate": true,
    "action": {
      "type": "external",
      "name": "sarisia/actions-status-discord",
      "version": "v1",
      "file": "/home/runner/work/actions-up-action/actions-up-action/.github/workflows/release.yaml",
      "line": 40
    }
  }
]
```

</details>

### markdown

Markdown Results

::: details View Example

---

<!--@include: include/comment.md-->

:::
