---
pageClass: inputs-page
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more [Details](#details).

| Input                        | Req. | Default&nbsp;Value           | Input&nbsp;Description                              |
| :--------------------------- | :--: | :--------------------------- | :-------------------------------------------------- |
| [path](#path) <CB />         |  -   | `package-lock.json`          | Location of Lock File                               |
| [update](#update) <CB />     |  -   | `true`                       | Update Release Notes [⤵️](#Changelog-Examples)      |
| [heading](#heading) <CB />   |  -   | `### Package Changes`        | Release Notes Heading [⤵️](#Changelog-Options)      |
| [toggle](#toggle) <CB />     |  -   | `Click Here to View Changes` | Toggle Text for Summary [⤵️](#Changelog-Options)    |
| [open](#open) <CB />         |  -   | `false`                      | Summary Open by Default [⤵️](#Changelog-Options)    |
| [empty](#empty) <CB />       |  -   | `false`                      | Add Summary on No Changes [⤵️](#Changelog-Options)  |
| [columns](#columns) <CB />   |  -   | `n,i,t,b,a`                  | Customize Table Columns [⤵️](#Changelog-Options)    |
| [sections](#sections) <CB /> |  -   | `a,u,d,r,k`                  | Customize Package Sections [⤵️](#Changelog-Options) |
| [max](#max) <CB />           |  -   | `30`                         | Max Releases to Process                             |
| [summary](#summary) <CB />   |  -   | `true`                       | Add Workflow Job Summary                            |
| [token](#token) <CB />       |  -   | `github.token`               | For use with a PAT                                  |

> For more details on inputs, see the VirusTotal API [documentation](https://docs.virustotal.com/reference/overview).

See the [Examples](examples.md) section for more options.

#### path

The `path` to the package lock file to proces.

#### update

Set this to `false` if you only want to use the [Outputs](#Outputs).

#### heading

You can customize the `heading` or set to an empty string to remove it.

#### toggle

The `toggle` must be set to a non-empty string if changing this input.

#### open

Set summary to be open by default (note the first example below is open).

#### empty

Set this to `true` to update release notes when no changes are detected.

#### columns

Customize column visibility and order.
This must be a perfectly formatted CSV with any combination of these keys:

Default value: `n,i,t,b,a`

| Key | Column       | Column&nbsp;Description |
| :-: | :----------- | :---------------------- |
| `n` | Package Name | Name of the package     |
| `i` | ❔           | Icon of the outcome     |
| `t` | Outcome      | Text of the outcome     |
| `b` | Before       | Version before change   |
| `a` | After        | Version after change    |

#### sections

Customize section visibility and order.
This must be a perfectly formatted CSV with any combination of these keys:

Default value: `a,u,d,r,k`

| Key | Section    | Section&nbsp;Description    |
| :-: | :--------- | :-------------------------- |
| `a` | Added      | Newly added package         |
| `u` | Upgraded   | Updated package version     |
| `d` | Downgraded | Downgraded package version  |
| `r` | Removed    | Removed package             |
| `k` | Unknown    | Invalid semantic version    |
| `n` | Unchanged  | Package version not changed |

Note: Enabling Unchanged `n` packages can produce a very long list.

<details><summary>View the Column and Section Maps</summary>

```javascript
const maps = {
  col: {
    n: { align: 'l', col: 'Package&nbsp;Name' },
    i: { align: 'c', col: '❔' },
    t: { align: 'c', col: 'Operation' },
    b: { align: 'l', col: 'Before' },
    a: { align: 'l', col: 'After' },
  },
  sec: {
    a: { icon: '🆕', text: 'Added', key: 'added' },
    u: { icon: '✅', text: 'Upgraded', key: 'upgraded' },
    d: { icon: '⚠️', text: 'Downgraded', key: 'downgraded' },
    r: { icon: '⛔', text: 'Removed', key: 'removed' },
    k: { icon: '❓', text: 'Unknown', key: 'unknown' },
    n: { icon: '🔘', text: 'Unchanged', key: 'unchanged' },
  },
}
```

</details>

### Changelog Examples

💡 _Click on an example heading to expand or collapse the example._

_Note: Examples are generated with an empty header and default values._

::: details Default Example

---

<!--@include: include/table.md-->

:::

::: details Example with No Changes

---

<!--@include: include/no-changes.md-->

:::

More Changelog Examples Coming Soon...

For more options, see the [Changelog Options](#Changelog-Options).
