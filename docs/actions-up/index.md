---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# Actions Up

<Badges owner="cssnr" repo="actions-up-action" name="actions-up" />

Check Actions for Updates with [actions-up](https://github.com/azat-io/actions-up) and report out-of-date actions in Pull Requests, Workflow [Outputs](outputs.md), or via the Job Status.

Generates a customizable table of available updates.
Post the table to a comment on a Pull Request.
Keep the table up-to-date on the comment as you update make changes.
Set a boolean output indicating if updates are available.
Sets a JSON output for actions scanned and available updates.
Sets a string output with the generated Markdown table.

::: details View Example Update

---

<!--@include: include/comment.md-->

:::

See the [Features](features.md) and [Inputs](inputs.md) documentation for more details.

To get started, create or update your [workflow file](#workflow) and review the [permissions](#permissions).

## Workflow

Add the step to an existing workflow or create a new one.

::: code-group
<<< snippets/step.yaml {1 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< snippets/workflow.yaml {17 yaml} [New Workflow ~vscode-icons:folder-type-github~]
:::

<LatestVersionBadge repo="cssnr/actions-up-action" />

Check out the [Rolling Tags](features.md#rolling-tags) for more tag options.

**Make sure to add the required [Permissions](#permissions).**

<div class="tip custom-block" style="padding-top: 8px;">

See the [Inputs Documentation](inputs.md) for additional options and **default values**.

</div>

## Permissions

This action requires the following permissions to comment on pull requests:

```yaml
permissions:
  pull-requests: write
```

Permissions documentation for [Workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token) and [Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication).
