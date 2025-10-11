---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# Update Version Tags

<Badges owner="cssnr" repo="update-version-tags-action" name="update-version-tags-action" />

Update Version Tags on Push or Release for Semantic Versions or Custom Tags.

Zero configuration to maintain both major `vN` -> `vN.x.x` and minor `vN.N` -> `vN.N.x` tags.

This is useful if you want to automatically update additional tags, to point to your pushed/released tag.
For example, many GitHub Actions maintain a `vN` and `vN.N` tag that points to the latest release of the `vN.x.x` branch.

To get started, create or update your [workflow file](#workflow) and review the [permissions](#permissions).

## Workflow

Add the step to an existing workflow or create a new one.

::: code-group
<<< snippets/step.yaml {1 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< snippets/workflow.yaml {13 yaml} [New Workflow ~vscode-icons:folder-type-github~]
:::

<LatestVersionBadge repo="cssnr/update-version-tags-action" />

Check out the [Rolling Tags](#rolling-tags) for more tag options.

**Make sure to add the required [Permissions](#permissions).**

<div class="tip custom-block" style="padding-top: 8px;">

See the [Inputs Documentation](inputs.md) for additional options and **default values**.

</div>

## Permissions

This action requires the following permissions:

```yaml
permissions:
  contents: write
```

Permissions documentation for
[Workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token)
and [Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication).

## Rolling Back

To roll back or manually update tags, copy this workflow: [tags.yaml](https://github.com/cssnr/update-version-tags-action/blob/master/.github/workflows/tags.yaml)

To rollback tags you must use a PAT with the `repo` and `workflow` permissions.
The target `sha` will be parsed from the target `tag` provided in the UI.

For example, if you releases `v1.0.1` but wanted to roll back to `v1.0.0`.
You would run the workflow with tag `v1.0.0` it would update the `v1` and `v1.0` tags
(or what ever tags you manually specify) to point back to the sha of tag `v1.0.0`.

<details><summary>View Rollback Workflow</summary>

<<< snippets/rollback.yaml

</details>

## Rolling Tags

<RollingTags repo="cssnr/update-version-tags-action" />

&nbsp;

<!--@include: include/wip.md-->
