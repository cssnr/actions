---
pageClass: inputs-page
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more Details.

| Input&nbsp;Name            | Default&nbsp;Value | Description&nbsp;of&nbsp;the&nbsp;Input&nbsp;Value |
| :------------------------- | :----------------- | :------------------------------------------------- |
| [path](#path) <CB />       | `.`                | Actions Scan Path                                  |
| [heading](#heading) <CB /> | `### Actions Up`   | Comment Heading                                    |
| [open](#open) <CB />       | `true`             | Details Open by Default                            |
| [columns](#columns) <CB /> | `n,f,b,l`          | Results Table Columns                              |
| [exclude](#exclude) <CB /> | -                  | List of Action Regex to Exclude                    |
| [files](#files) <CB />     | -                  | List of File Names to Exclude                      |
| [fail](#fail) <CB />       | `false`            | Fail Job if Updates are Found                      |
| [summary](#summary) <CB /> | `true`             | Add Workflow Job Summary                           |
| [token](#token) <CB />     | `github.token`     | For use with a PAT                                 |

> For more details on inputs, see [actions-up](https://github.com/azat-io/actions-up).

See the [Examples](examples.md) section for more options.

#### path <CB />

Path to scan for actions. The default path should find everything checked out.

Default: `.`

#### heading <CB />

Set the heading of the PR comment.

Default: `### Actions Up`

#### open <CB />

The results are wrapped in a details/summary. Set this to `true` to have the details open by default.

Default: `true`

#### columns <CB />

Results Columns and Order. Available Columns.

| Key | Column         | Description     |
| :-: | :------------- | :-------------- |
| `n` | action.name    | Action Name     |
| `f` | action.file    | Action File     |
| `b` | isBreaking     | Is Breaking     |
| `c` | currentVersion | Current Version |
| `l` | latestVersion  | Latest Version  |
| `s` | latestSha      | Latest SHA Hash |

Default: `n,f,b,l`

#### exclude <CB />

CSV or Newline Delimited list of excludes.

<details><summary>View CSV and Newline Examples</summary>

CSV. You can use quotes on single-line inputs because YAML removes the quotes around the string.

```yaml
exclude: 'actions/.*, docker/.*'
```

Multi-Line. You can NOT use quotes on multi-line put because YAML does NOT remove the quotes.

```yaml
exclude: |
  actions/.*
  docker/.*
```

</details>

See [azat-io/actions-up#cli-excludes](https://github.com/azat-io/actions-up?tab=readme-ov-file#cli-excludes) for more details.

#### files <CB />

CSV or Newline List of File Names to Exclude.
All actions in these files will be excluded.

<details><summary>View CSV and Newline Examples</summary>

CSV. You can use quotes on single-line inputs because YAML removes the quotes around the string.

```yaml
files: 'lint.yaml, release.yaml'
```

Multi-Line. You can NOT use quotes on multi-line inputs because YAML does NOT remove the quotes.

```yaml
files: |
  lint.yaml
  release.yaml
```

</details>

#### fail <CB />

Set this to `true` to fail the job if updates are found.

Default: `### Actions Up`

#### summary <CB />

Add a Job Summary to the Workflow Run. Set to `false` to disable this.

Default: `true`

#### token <CB />

Allows optionally setting a PAT. The workflow token is automatically passed.

Default: `github.token`
