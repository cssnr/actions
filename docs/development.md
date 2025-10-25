# Development

If you are interested in Action Development, these resources may help.

[[toc]]

## Unpublished Actions

These are actions I have not published. Some of which I use internally.

<GitHubTable title="Published" :repos="actions.unpublished" />

## Template Actions

These are actions I use as starting points for creating new actions.

<GitHubTable title="Published" :repos="actions.template" />

## Get Started

### Running Locally <Badge type="tip" text="nektos/act" />

The most important tool for developing actions is [nektos/act](https://github.com/nektos/act).

#### Run from source

Instead of using a watcher you can change the `runs:` in your `action.yml` to your source file
and run `act` with `--use-gitignore=false` so the `node_modules` folder is copied with your files.

```shell
act -j test --use-gitignore=false
```

#### Secrets, env, event

For secrets and environment variables you can just create a `.secrets` and `.env` file.

To customize the `github` event add an `event.json` file and run `act` with `-e event.json`.

```shell
act -j test -e event.json
```

<details><summary>event.json</summary>

<span v-pre>

This lets you skip workflow steps with this if: `${{ !github.event.act }}`

</span>

```json
{
  "act": true
}
```

---

</details>

#### Debug logging

The best way to see all log output is to enable `RUNNER_DEBUG` and show secrets.

Because of everything covered, this is the command I usually run.

```shell
act -j test -e event.json --use-gitignore=false --insecure-secrets --env RUNNER_DEBUG=1
```

<!--suppress ES6UnusedImports -->
<script setup>
import actions from '../.vitepress/scripts/actions.js'
</script>
