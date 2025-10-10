---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# VirusTotal Action

<Badges owner="cssnr" repo="virustotal-action" />

<span class="search-keywords">Install and Setup Guide to Begin.</span>

To get started, create or update your [workflow file](#workflow) and review the [permissions](#permissions).

## Workflow

Add the step to an existing workflow or create a new one.

_If creating a [new workflow](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows#about-workflows), place it in the `.github/workflows` directory._

::: code-group
<<< snippets/basic/step.yaml {1 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< snippets/basic/workflow.yaml {13,17 yaml} [New Workflow ~vscode-icons:folder-type-github~]
:::

**Make sure to add the required [Permissions](#permissions).**

[![Latest Version](https://img.shields.io/github/v/release/cssnr/virustotal-action?style=for-the-badge&logo=github&label=Latest%20Release)](https://github.com/cssnr/virustotal-action/releases)

Check out the [Rolling Tags](features.md#rolling-tags) for more tag options.

<div class="tip custom-block" style="padding-top: 8px;">

See the [Inputs Documentation](inputs.md) for additional options and **default values**.

</div>

## Permissions

This action requires the following permissions to edit releases notes:

```yaml
permissions:
  contents: write
```

Permissions documentation for [Workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token) and [Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication).
