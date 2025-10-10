---
pageClass: inputs-page
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more [Details](#details).

| Input&nbsp;Name                            | Default&nbsp;Value            | Description&nbsp;of&nbsp;the&nbsp;Input&nbsp;Value |
| :----------------------------------------- | :---------------------------- | :------------------------------------------------- |
| [vt_api_key](#vt_api_key) <CB />           | _Required_                    | VirusTotal API Key                                 |
| [file_globs](#file_globs) <CB />           | -                             | File Globs to Process                              |
| [rate_limit](#rate_limit) <CB />           | `4`                           | API Calls Per Minute                               |
| [release_id](#release_id) <CB />           | -                             | Release ID to Process                              |
| [update_release](#update_release) <CB />   | `true`                        | Update the                                         |
| [release_heading](#release_heading) <CB /> | _[see below](#release-notes)_ | Release Notes Heading                              |
| [collapsed](#collapsed) <CB />             | `false`                       | Show Links Collapsed.                              |
| [file_name](#file_name) <CB />             | `name`                        | File Name Display: [`name`, `id`]                  |
| [summary](#summary) <CB />                 | `true`                        | Add Summary to Job                                 |
| [github_token](#github_token) <CB />       | `github.token`                | For use with a PAT                                 |

> For more details on inputs, see the VirusTotal API [documentation](https://docs.virustotal.com/reference/overview).

<details><summary>Example with all Inputs</summary>

```yaml
- name: 'VirusTotal'
  uses: cssnr/virustotal-action@v1
  with:
    vt_api_key: ${{ secrets.VT_API_KEY }}
    file_globs: |
      file1
      release/*
    rate_limit: 4
    update_release: true
    release_heading: '🛡️ **VirusTotal Results:**'
    summary: true
```

</details>

See the [Examples](examples.md) section for more options.

## Details

#### vt_api_key {#vt_api_key}

Get your API key from: https://www.virustotal.com/gui/my-apikey

#### file_globs {#file_globs}

If provided, will process matching files instead of release assets.  
For glob pattern, see [examples](examples.md) and the [docs](https://github.com/actions/toolkit/tree/main/packages/glob#patterns).

#### rate_limit {#rate_limit}

Rate limit for file uploads. Set to `0` to disable if you know what you are doing.

#### release_id {#release_id}

If provided, will process the corresponding release.
The release ID can be generated from a previous step.
By providing a release ID, this action does not need to run on a release event to process a release.

#### summary {#summary}

Will add result details to the job summary in the workflow.

<details><summary>👀 View Job Summary Example</summary>

---

<!--@include: ./include/summary.md-->

---

</details>

To view a workflow run, click on a recent [Test](https://github.com/cssnr/virustotal-action/actions/workflows/test.yaml) job _(requires login)_.

## Release Notes

If run on a release event, the Release Notes are automatically updated with the results unless you set `update_release` to `false`.
You can customize the heading or remove it by specifying an empty string.

Example Release Notes.

<!--@include: ./include/notes.md-->

#### update_release {#update_release}

If triggered from a release workflow, will update the release notes and append the results.

#### release_heading {#release_heading}

Customize the Release Notes Heading.  
Default: `🛡️ **VirusTotal Results:**`

#### collapsed {#collapsed}

Set to `true` to collapse the result links by default. _Experimental._

#### file_name {#file_name}

Customize the Release Notes File Name Display. This can be one of `name`, or `id`.

#### github_token {#github_token}

<span v-pre>

The `${{ github.token }}` / `${{ secrets.GITHUB_TOKEN }}` is automatically passed, there is no need to manually pass these!

This is only available to allow users to pass a different token they have created and defined in their `secrets` for explicit use with a PAT.

</span>
