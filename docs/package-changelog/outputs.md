---
pageClass: outputs-page
title: Outputs Documentation
---

# Outputs

Details about the stack are output for use in additional steps.

| Input&nbsp;Name              | Output&nbsp;Description |
| :--------------------------- | :---------------------- |
| [json](#json) <CB />         | Chnages JSON Object     |
| [markdown](#markdown) <CB /> | Changes Markdown Table  |

This outputs the changes [json](#json) object and the [markdown](#markdown) table.

### json <CB />

JSON results from [snyk-nodejs-lockfile-parser](https://github.com/snyk/nodejs-lockfile-parser).

```json
{
  "added": [{ "name": "", "after": "" }],
  "downgraded": [{ "name": "", "before": "", "after": "" }],
  "removed": [{ "name": "", "before": "" }],
  "unchanged": [{ "name": "", "before": "", "after": "" }],
  "unknown": [{ "name": "", "before": "", "after": "" }],
  "upgraded": [{ "name": "", "before": "", "after": "" }]
}
```

### markdown <CB />

Markdown Table String.

<details><summary>String Results</summary>

```text
<!--@include: include/table.md-->
```

</details>

::: details Markdown Results

---

<!--@include: include/table.md-->

:::

## Workflow Usage

Using the outputs in a workflow.

```yaml
- name: 'Package Changelog Action'
  id: changelog
  uses: cssnr/package-changelog-action@v2
  with:
    update: false

- name: 'Echo Output'
  env:
    JSON: ${{ steps.changelog.outputs.json }}
    MARKDOWN: ${{ steps.changelog.outputs.markdown }}
  run: |
    echo "json: ${JSON}"
    echo "markdown: ${MARKDOWN}"
```

<span v-pre>

Note: due to the way `${{}}` expressions are evaluated, multi-line output gets executed in a run block.

</span>
