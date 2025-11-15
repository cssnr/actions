---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# Package Changelog Action

<Badges owner="cssnr" repo="package-changelog-action" name="package-changelog" />

Action to Generate Package Changelog. View some [Changelog Examples](#Changelog-Examples).

On a release, this action will parse the differences in the provided `package-lock.json` file
between the current and previous release and update the release notes with a table of changes.

On a prerelease it compares with the previous release, on a non-prerelease release,
it compares with the previous non-prerelease.
Packages get sorted into the following categories and columns:

| Name        | ❔  | Operation  | Before   | After   |
| :---------- | :-: | :--------- | :------- | :------ |
| @added      | 🆕  | Added      |          | current |
| @upgrade    | ✅  | Upgraded   | previous | current |
| @downgraded | ⚠️  | Downgraded | previous | current |
| @removed    | ⛔  | Removed    | previous |         |
| @unknown    | ❓  | Unknown    | previous | current |
| @unchanged  | 🔘  | Unchanged  | previous | current |

## Workflow

Add the step to an existing workflow or create a new one.

::: code-group
<<< snippets/step.yaml {1 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< snippets/workflow.yaml {17 yaml} [New Workflow ~vscode-icons:folder-type-github~]
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
