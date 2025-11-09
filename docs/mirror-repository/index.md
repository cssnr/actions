---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# Mirror Repository Action

<Badges owner="cssnr" repo="mirror-repository-action" name="mirror-repository-action" />

Mirror Git Repository to Remote Host. Supports automatic repository detection,
partial and full overrides, authentication, auto-create destination, and [much more](#features).

To get started, create or update your [workflow file](#workflow).

[Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)

## Workflow

Add the step to an existing workflow or create a new one.

::: code-group
<<< snippets/step.yaml {6 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< snippets/workflow.yaml {21 yaml} [New Workflow ~vscode-icons:folder-type-github~]
:::

<LatestVersionBadge repo="cssnr/mirror-repository-action" />

Check out the [Rolling Tags](#rolling-tags) for more tag options.

**See the [Setup Instructions](#setup-instructions) below for more details.**

<div class="tip custom-block" style="padding-top: 8px;">

See the [Inputs Documentation](inputs.md) for additional options and **default values**.

</div>

## Features

- Automatic repository detection.
- Individually override owner/repo/host.
- Optionally set owner/repo/host as a string.
- Allows authentication with username and password.
- Option to automatically create destination repository.

Don't see your feature here? Please help by submitting a [Feature Request](https://github.com/cssnr/mirror-repository-action/discussions/categories/feature-requests).

## Setup Instructions

1. Create a Token for Mirror to use as a Password for Pushing Commits, or Creating Repositories.
   - Codeberg/Gitea/Forgejo go here: https://codeberg.org/user/settings/applications
   - Select Permissions: `write:organization` `write:repository` `write:user`

2. Create Remote Repository to Mirror (or set `create` to `true` for codeberg.org).

3. Go to the settings for your source repository on GitHub and add the `CODEBERG_TOKEN` secret.
   - For organizations, you can add the token one time at the Organization level.

4. Add the following file to source repository on GitHub: `.github/workflows/mirror.yaml`
   - The `owner` is automatically set to the GitHub Organization or Username if personal. Set to override.
   - The `repo` is automatically set to the GitHub Repository Name. This should only be set to rename repo.
   - For Codeberg, use the `host` to `https://codeberg.org` and set the `username` to your Codeberg username.

<div class="tip custom-block" style="padding-top: 8px;">

See the [Inputs Documentation](inputs.md) for additional options and **default values**.

</div>

## Rolling Tags

<RollingTags repo="cssnr/mirror-repository-action" />

&nbsp;

<!--@include: include/wip.md-->
