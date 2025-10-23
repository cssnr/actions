---
pageClass: inputs-page
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more [Details](#details).

| Input&nbsp;Name              | Default&nbsp;Value | Short&nbsp;Description&nbsp;of&nbsp;the&nbsp;Input&nbsp;Value |
| :--------------------------- | :----------------- | ------------------------------------------------------------- |
| [url](#url) <CB />           | -                  | Full URL to Mirror; Overrides: `host`/`owner`/`repo`          |
| [host](#host) <CB />         | -                  | Full Host to Mirror; Example: `https://codeberg.org`          |
| [owner](#owner) <CB />       | Source Owner       | Repository Owner of Mirror (if different from source)         |
| [repo](#repo) <CB />         | Source Repo        | Repository Name of Mirror (if different from source)          |
| [create](#create) <CB />     | `false`            | Set to `true` to attempt to Create the Mirror Repo            |
| [username](#username) <CB /> | Source Owner       | Username for Authentication to Mirror                         |
| [password](#password) <CB /> | -                  | Token or Password for Authentication to Mirror                |
| [summary](#summary) <CB />   | `true`             | Add Job Summary. Set to `false` to Disable                    |
| [private](#private) <CB />   | Repo Private       | If the Mirror Repo Status is Different from Source            |

See the [Examples](#examples) section for more options.

## Details

#### url <CB /> <Badge type="info" text="Important" />

You must set this or [host](#host), not both.

**Important!** Setting this will override [host](#host), [owner](#owner) and [repo](#repo).

Example: `https://codeberg.org/cssnr/mirror-repository-action`

#### host <CB /> <Badge type="info" text="Important" />

You must set this or [url](#url), not both.

To use automatic [owner](#owner) or [repo](#repo) detection, set the destination `host`.

Example: `https://codeberg.org`

_Overridden by [url](#url)._

#### owner <CB />

If the destination owner is different from the source, you can set it here.

Example: `cssnr`

Default: _Source Owner_

_Overridden by [url](#url)._

#### repo <CB />

If the destination repository is different from the source, you can set it here.

Example: `mirror-repository-action`

Default: _Source Repository_

_Overridden by [url](#url)._

#### create <CB />

Tested with Codeberg but should also work with Gitea/Forgejo. Set to `true` to enable.

Default: `false`

#### username <CB />

Authentication username if different from [owner](#owner).

Example: `shaner`

Default: _Source Owner_

#### password <CB /> <Badge type="warning" text="Required" />

Authentication password or token associated with the [username](#username).

#### summary <CB />

Write a Summary for the job. To disable this set to `false`.

<details><summary>👀 View Example Job Summary</summary>

---

✅ Successfully Mirrored: `cssnr/mirror-repository-action`

- https://codeberg.org/cssnr/mirror-repository-action

<details><summary>Results</summary>

```text
remote:
remote: Create a new pull request for 'updates':
remote:   https://codeberg.org/cssnr/mirror-repository-action/compare/master...updates
remote:
To https://codeberg.org/cssnr/mirror-repository-action
   eaadc3f..da84f34  origin/updates -> updates
```

</details>

---

</details>

Default: `true`

#### private <CB />

If the Mirror Repo Status is Different from Source.

Default: _Source Private Status_

## Examples

```yaml
steps:
  - name: 'Docker Context'
    uses: cssnr/docker-context-action@v1
    with:
      host: ${{ secrets.DOCKER_HOST }}
      user: ${{ secrets.DOCKER_USER }}
      port: 22 # 22 is the default value - optional
      pass: ${{ secrets.DOCKER_PASS }} # or ssh_key - optional
      ssh_key: ${{ secrets.DOCKER_SSH_KEY }} # or pass - optional

  - name: 'Inspect Docker'
    runs: |
      docker context ls
      docker context inspect
      docker info
      docker ps
```

&nbsp;

<!--@include: include/wip.md-->
