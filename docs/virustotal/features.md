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

<!--@include: include/notes.md-->

## Job Summary

Unless disabled, a Job Summary is generated to capture the command, output and errors.

::: details View Job Summary

<!--@include: include/summary.md-->

:::

You can view an actual workflow run from the [Test job](https://github.com/cssnr/virustotal-action/actions/workflows/test.yaml) on GitHub _(requires login)_.

## Rolling Tags

<RollingTags repo="cssnr/virustotal-action" />

## VirusTotal Badges

[![VT Release](https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk)](https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk)
[![VT Hash](https://badges.cssnr.com/vt/sha/sha256:d54fd9a93f2aa25b5c95128f84de1a624783ded6e66554c12a5ffd07546146e4)](https://badges.cssnr.com/vt/sha/sha256:d54fd9a93f2aa25b5c95128f84de1a624783ded6e66554c12a5ffd07546146e4)

We are also working on a [Badge Server](https://github.com/smashedr/node-badges) (similar to [shields.io](https://shields.io/)) supporting VirusTotal.

- From a File Hash or VirusTotal File ID
- From a GitHub Release Asset using Latest or a Tag

For more details see the [Website](https://smashedr.github.io/node-badges-docs/guides/get-started), the [README.md](https://github.com/smashedr/node-badges?tab=readme-ov-file#virustotal-release-and-files) or the [Discussion](https://github.com/cssnr/virustotal-action/discussions/27).

These badges may be eventually added to this action as an option for release notes.
Any feedback is helpful during this phase of development.
