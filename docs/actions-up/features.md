---
pageClass: features-page
---

# Features

- Report actions with updates.
- Exclude action names by regex.
- Sets outputs with results.
- [Comment on PR](#pr-comment) with results table.
- Customize table columns and order.
- Post results open or collapsed.
- Set the comment heading text.
- Post results to [Job Summary](#job-summary).

<h3>Planned</h3>

- Exclude action files by name.

::: tip Request a Feature
Please help us by [submitting a feature request](https://github.com/cssnr/actions-up-action/discussions/categories/feature-requests).
:::

<h3>Related</h3>

Want to check outdated npm packages on a pull? [cssnr/npm-outdated-action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)  
Want to show package changes on release notes? [cssnr/package-changelog-action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)  
Want to automatically updated tags on release? [cssnr/update-version-tags-action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)

## PR Comment

If run on a release event, the Release Notes are automatically updated with the results unless you set `update_release` to `false`.
You can customize the heading or remove it by specifying an empty string.

::: details View PR Comment

---

<!--@include: include/comment.md-->

:::

## Job Summary

Unless disabled, a Job Summary is generated to capture the command, output and errors.

::: details View Job Summary

---

<!--@include: include/summary.md-->

:::

You can view an actual workflow run from the [Test job](https://github.com/cssnr/actions-up-action/actions/workflows/test.yaml) on GitHub _(requires login)_.

## Rolling Tags

<RollingTags repo="cssnr/actions-up-action" />
