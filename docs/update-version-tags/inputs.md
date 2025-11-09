---
pageClass: inputs-page
title: Inputs Documentation
---

# Inputs

All inputs are optional. Click on the **Input Name** for more [Details](#details).

| Input                        | Default&nbsp;Value | Short&nbsp;Description&nbsp;of&nbsp;the&nbsp;Input&nbsp;Value |
| :--------------------------- | :----------------- | :------------------------------------------------------------ |
| [prefix](#prefix) <CB />     | `v`                | Tag Prefix for Semantic Versions                              |
| [major](#major-minor) <CB /> | `true`             | Update Major Tag                                              |
| [minor](#major-minor) <CB /> | `true`             | Update Minor Tag                                              |
| [release](#release) <CB />   | `false`            | Update Release Tag                                            |
| [tags](#tags) <CB />         | -                  | Additional Tags to Update                                     |
| [tag](#tag) <CB />           | `github.ref_name`  | Manually Set Target Tag                                       |
| [create](#create) <CB />     | `false`            | Create Target Tag                                             |
| [summary](#summary) <CB />   | `true`             | Add Summary to Job                                            |
| [dry_run](#dry_run) <CB />   | `false`            | Do not Create Tags, Outout Only                               |
| [token](#token) <CB />       | `github.token`     | For use with a PAT to Rollback                                |

See the [Examples](#examples) section for more options.

## Details

#### prefix <CB />

The `prefix` is applied to the generated version tags. If you release `1.0.0` or `v1.0.0`,
the parsed major/minor is `1` and `1.0` and then with the prefix added becomes `v1` and `v1.0`.

To disable the prefix, set it to an empty string `prefix: ''`

The `prefix` is not applied to the specified input [tags](#tags).

Default: `v`

#### major/minor <CB text="major" /> <CB text="minor" />

Both major and minor versions are parsed from the release tag using `semver`. If you release
version `1.0.0` this will update or create a reference for `v1` and `v1.0`. If you are not using semantic versions, set
both to `false` and provide your own `tags`.

Default: `true`

#### release <CB />

If you provide a non-release tag `1.2.3-release.1` this would create the release tag `1.2.3`.

Default: `false`

#### tags <CB />

These are extra tags to set. For example, you could maintain a `latest` tag that always points to the latest release.

These can be a string list `"v1,v1.0"` or newline delimited.

<details><summary>👀 View Example tags</summary>

Extra Tag.

```yaml
with:
  tags: latest
```

CSV with [major/minor](#major-minor) disabled.

```yaml
with:
  tags: v1,v1.0,latest
  major: false
  minor: false
```

Newline with [major/minor](#major-minor) disabled.

```yaml
with:
  tags: |
    v1
    v1.0
    latest
  major: false
  minor: false
```

---

</details>

#### tag <CB />

This is the target tag to parse the `sha` from. Defaults to the `sha` that triggered the workflow.
To override this behavior you can specify a target tag here from which the target `sha` will be parsed.
This is the `sha` that all parsed or provided [tags](#tags) are updated too.
To create this tag at the current `sha` set [create](#create) to `true`.

Rolling back requires a PAT. See [Rolling Back](#rolling-back) for more details and a manual workflow example.

<span v-pre>

Default: `${{ github.ref_name }}`

</span>

#### create <CB />

If `true` this will create the `tag` at the current `sha` of the workflow run.

Default: `false`

#### summary <CB />

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

Default: `true`

#### dry_run <CB /> {#dry_run}

If this is `true` no tags will be created/updated and will only output the results.

Default: `false`

#### token <CB />

GitHub workflow tokens do not allow for rolling back or deleting tags.
To do this you must create a PAT with the `repo` and `workflow` permissions, add it to secrets, and use it.
See [Rolling Back](index.md#rolling-back) for more information and an example.

<span v-pre>

Default: `${{ github.token }}`

</span>

## Examples

Manually set tags.

```yaml
- name: 'Update Tags'
  uses: cssnr/update-version-tags-action@v2
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
  uses: cssnr/update-version-tags-action@v2
  with:
    tag: v1.0.1
```

&nbsp;

<!--@include: include/wip.md-->
