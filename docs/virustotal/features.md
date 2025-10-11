---
pageClass: features-page
---

# Features

- Supports files up to 650MB
- Upload Release Assets or File Globs
- Automatically add Results to [Release Notes](#release-notes)
  - Customize Release Notes Heading
- Rate Limited for Free Accounts
- Option to specify the Release ID

<h3>Planned</h3>

- Add options to customize release update/output format (next on the roadmap)
- Add release body parsing to properly process new files on edited activity
- Add option to apply file_globs to release assets

::: tip Request a Feature
Please help us by [submitting a feature request](https://github.com/cssnr/virustotal-action/discussions/categories/feature-requests).
:::

## Release Notes

If run on a release event, the Release Notes are automatically updated with the results unless you set `update_release` to `false`.
You can customize the heading or remove it by specifying an empty string.

Example Release Notes.

<!--@include: ./include/notes.md-->

## Job Summary

Unless disabled, a Job Summary is generated to capture the command, output and errors.

::: details View Job Summary

<!--@include: ./include/summary.md-->

:::

You can view an actual workflow run from the [Test job](https://github.com/cssnr/virustotal-action/actions/workflows/test.yaml) on GitHub _(requires login)_.

## Rolling Tags

<RollingTags repo="cssnr/virustotal-action" />
