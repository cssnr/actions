---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# Cloudflare Purge Cache Action

<Badges owner="cssnr" repo="cloudflare-purge-cache-action" name="cloudflare-purge-zone-cache" image="cloudflare-purge-cache-action" />

Purge Cloudflare cache for a zone or list of zones with optional filters including files, prefixes, tags, and hosts.

Loaded with [Options](inputs.md) including job summary, fail mode, dry run, custom files prefix and [Outputs](outputs.md).

[Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)

To get started, create or update your [workflow file](#workflow).

## Workflow

Add the step to an existing workflow or create a new one.

::: code-group
<<< snippets/step.yaml {1 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< snippets/workflow.yaml {13 yaml} [New Workflow ~vscode-icons:folder-type-github~]
:::

<LatestVersionBadge repo="cssnr/cloudflare-purge-cache-action" />

Check out the [Rolling Tags](#rolling-tags) for more tag options.

<div class="tip custom-block" style="padding-top: 8px;">

See the [Inputs Documentation](inputs.md) for additional options and **default values**.

</div>

## Features

- Flush one or multiple zones w/ inline conditionals.
- Flush based on files, tags, hosts, or prefixes.
- Option to prepend a path prefix to all files.
- Option to enable dry run and add job summary.

Don't see your feature here? Please help by submitting a [Feature Request](https://github.com/cssnr/cloudflare-purge-cache-action/discussions/categories/feature-requests).

## Rolling Tags

<RollingTags repo="cssnr/cloudflare-purge-cache-action" />

&nbsp;

<!--@include: include/wip.md-->
