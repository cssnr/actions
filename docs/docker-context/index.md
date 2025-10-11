---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# Docker Context Action

<Badges owner="cssnr" repo="docker-context-action" />

Set up a Remote Docker Context over SSH using Password or Keyfile Authentication.
This allows all subsequent `docker` commands to run on the remote [host/context](https://docs.docker.com/engine/manage-resources/contexts/).

[Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)

_To easily deploy a swarm or compose stack use: [cssnr/stack-deploy-action](https://github.com/cssnr/stack-deploy-action)_  
_To deploy directly to Portainer use: [cssnr/portainer-stack-deploy-action](https://github.com/cssnr/portainer-stack-deploy-action)_

To get started, create or update your [workflow file](#workflow).

## Workflow

Add the step to an existing workflow or create a new one.

::: code-group
<<< snippets/step.yaml {1 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< snippets/workflow.yaml {13 yaml} [New Workflow ~vscode-icons:folder-type-github~]
:::

<LatestVersionBadge repo="cssnr/update-version-tags-action" />

Check out the [Rolling Tags](#rolling-tags) for more tag options.

<div class="tip custom-block" style="padding-top: 8px;">

See the [Inputs Documentation](inputs.md) for additional options and **default values**.

</div>

## Features

- Configure SSH using keyfile or password: [src/ssh.sh](https://github.com/cssnr/docker-context-action/blob/master/src/ssh.sh)
- Creates and uses a remote docker context: [src/context.sh](https://github.com/cssnr/docker-context-action/blob/master/src/context.sh)
- Option to run Docker login for any registry: [src/login.sh](https://github.com/cssnr/docker-context-action/blob/master/src/login.sh)
- Clean up the authorized_keys file for password: [src/cleanup.sh](https://github.com/cssnr/docker-context-action/blob/master/src/cleanup.sh)

Don't see your feature here? Please help by submitting a [Feature Request](https://github.com/cssnr/docker-context-action/discussions/categories/feature-requests).

## Rolling Tags

<RollingTags repo="cssnr/docker-context-action" />

&nbsp;

<!--@include: include/wip.md-->
