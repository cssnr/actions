---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# Web Request Action

<Badges owner="cssnr" repo="web-request-action" name="web-request" />

Easily make a web request from a workflow using Axios.
Supports all methods, uploading files, basic authentication and more.

To get started, create or update your [workflow file](#workflow).

## Workflow

Add the step to an existing workflow or create a new one.

::: code-group
<<< snippets/step.yaml {1 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< snippets/workflow.yaml {13 yaml} [New Workflow ~vscode-icons:folder-type-github~]
:::

<LatestVersionBadge repo="cssnr/web-request-action" />

Check out the [Rolling Tags](#rolling-tags) for more tag options.

<div class="tip custom-block" style="padding-top: 8px;">

See the [Inputs Documentation](inputs.md) for additional options and **default values**.

</div>

## Features

- Provide data in JSON or YAML format.
- Supports files with custom file keys.
- Add Basic Auth and ignore SSL warnings.

Don't see your feature here? Please help by submitting a [Feature Request](https://github.com/cssnr/web-request-action/discussions/categories/feature-requests).

## Rolling Tags

<RollingTags repo="cssnr/web-request-action" />

&nbsp;

<!--@include: include/wip.md-->
