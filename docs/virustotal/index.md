---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# VirusTotal Action

<Badges owner="cssnr" repo="virustotal-action" />

Submit file globs or release assets to the VirusTotal API for scanning.

Supports files up to 650MB and includes rate limiting for free accounts.

On release events the [Release Notes](features.md#release-notes) will optionally be updated with links to the scan results.
You can now customize the links display and release notes heading. See the [Features](features.md) for more details.

To get started, create or update your [workflow file](#workflow) and review the [permissions](#permissions).

## Workflow

Add the step to an existing workflow or create a new one.

::: code-group
<<< snippets/step.yaml {1 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< snippets/workflow.yaml {18 yaml} [New Workflow ~vscode-icons:folder-type-github~]
:::

<LatestVersionBadge repo="cssnr/virustotal-action" />

Check out the [Rolling Tags](features.md#rolling-tags) for more tag options.

**Make sure to add the required [Permissions](#permissions).**

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
