---
pageClass: inputs-page
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more [Details](#details).

| Input                | Default&nbsp;Value | Description&nbsp;of&nbsp;Input   |
| :------------------- | :----------------- | :------------------------------- |
| [prefix](#prefix)    | `v`                | Tag Prefix for Semantic Versions |
| [major](#majorminor) | `true`             | Update Major Tag                 |
| [minor](#majorminor) | `true`             | Update Minor Tag                 |
| [tags](#tags)        | -                  | Additional Tags to Update        |
| [tag](#tag)          | `github.ref_name`  | Manually Set Target Tag          |
| [create](#create)    | `false`            | Create Target Tag                |
| [summary](#summary)  | `true`             | Add Summary to Job               |
| [dry_run](#dry_run)  | `false`            | Do not Create Tags, Outout Only  |
| [token](#token)      | `github.token`     | For use with a PAT to Rollback   |

## Examples

Manually set tags.

```yaml
- name: 'Update Tags'
  uses: cssnr/update-version-tags-action@v1
  with:
    major: false
    minor: false
    tags: |
      v1
      v1.0
```

Specify the target tag.

```yaml
- name: 'Update Tags'
  uses: cssnr/update-version-tags-action@v1
  with:
    tag: v1.0.1
```

## Details

#### prefix

To disable the prefix, set it to an empty string `prefix: ''`

#### major/minor

Both major and minor versions are parsed from the release tag using `semver`. If you release
version `1.0.0` this will update or create a reference for `v1` and `v1.0`. If you are not using semantic versions, set
both to `false` and provide your own `tags`.

#### tags

The `prefix` is not applied to specified tags. These can be a string list `"v1,v1.0"` or newline
delimited `|`. If you only want to update the specified `tags` make sure to set both `major` and `minor` to `false`.

#### tag

This is the target tag to parse the `sha` from. Defaults to the `sha` that triggered the workflow.
To override this behavior you can specify a target tag here from which the target `sha` will be parsed.
This is the `sha` that all parsed or provided `tags` are updated too. Rolling back requires a PAT.
See [Rolling Back](index.md#rolling-tags) for more details and a manual workflow example.

#### create

If `true` this will create the `tag` at the current `sha` of the workflow run.

#### summary

Write a Summary for the job. To disable this set to `false`.

<details><summary>👀 View Example Job Summary</summary>

---

<table><tr><td>Tag</td><td><code>v1.0.1</code></td></tr><tr><td>Sha</td><td><code>9b5d1797561610366c63dcd48b0764f4cdd91761</code></td></tr><tr><td>Tags</td><td><code>v1,v1.0</code></td></tr></table>
<details><summary><strong>Tags</strong></summary><pre lang="text"><code>v1
v1.0</code></pre></details><details><summary>Results</summary><table><tr><th>Tag</th><th>Result</th></tr><tr><td><code>v1</code></td><td>Updated</td></tr><tr><td><code>v1.0</code></td><td>Updated</td></tr></table></details><details><summary><strong>SemVer</strong></summary>

```json
{
  "options": {},
  "loose": false,
  "includePrerelease": false,
  "raw": "v1.0.1",
  "major": 1,
  "minor": 0,
  "patch": 1,
  "prerelease": [],
  "build": [],
  "version": "1.0.1"
}
```

</details>
<details><summary>Inputs</summary><pre lang="yaml"><code>prefix: v
major: true
minor: true
tags: ""
tag: ""
summary: true
dry_run: false
</code></pre>
</details>

---

</details>

#### dry_run #{dry_run}

If this is `true` no tags will be created/updated and will only output the results.

#### token

GitHub workflow tokens do not allow for rolling back or deleting tags.
To do this you must create a PAT with the `repo` and `workflow` permissions, add it to secrets, and use it.
See [Rolling Back](index.md#rolling-tags) for more information and an example.

&nbsp;

<!--@include: include/wip.md-->
