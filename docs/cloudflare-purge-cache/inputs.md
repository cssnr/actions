---
pageClass: inputs-page
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more [Details](#details).

| Input&nbsp;Name                     | Default&nbsp;Value | Short&nbsp;Description&nbsp;of&nbsp;the&nbsp;Input&nbsp;Value |
| :---------------------------------- | :----------------- | :------------------------------------------------------------ |
| [token](#token) <CB />              | _Required_         | Cloudflare API Token                                          |
| [zones](#zones) <CB />              | _Required_         | Zone Names to Purge                                           |
| [files](#files) <CB />              | -                  | Files to Purge                                                |
| [prefix](#prefix) <CB />            | -                  | Prefix Prepended to `files`                                   |
| [tags](#tags-hosts-prefixes) <CB /> | -                  | Tags to Purge (Enterprise)                                    |
| [hosts](#hosts) <CB />              | -                  | Hosts to Purge (Enterprise)                                   |
| [prefixes](#prefixes) <CB />        | -                  | Prefixes to Purge (Enterprise)                                |
| [fail](#fail) <CB />                | `all`              | Fail Mode: [`all`, `any`, `none`]                             |
| [dry_run](#dry_run) <CB />          | `false`            | Run Without Purging                                           |
| [summary](#summary) <CB />          | `true`             | Add Summary to Job                                            |

See the [Examples](#examples) section for more options.

## Details

### token <CB /> <Badge type="warning" text="Required" />

You need a [Cloudflare Token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) with the permission `Zone.Cache Purge`.

### zones <CB /> <Badge type="warning" text="Required" />

CSV or Newline Delimited list of zone names to purge.

<details><summary>View <b>CSV and Newline Delimited</b> Examples</summary>

CSV - Comma Seperated Value:

```yaml
zones: cssnr.com,example.com
```

Newline Delimited:

```yaml
zones: |
  cssnr.com
  example.com
```

</details>

### files <CB />

CSV or Newline Delimited list of files to purge.

This is limited to 30 files on the free plan and 500 for enterprise.
For more information view docs for purge by [file](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).

### prefix <CB />

If provided, the `prefix` will be prepended to all the [files](#files).

Useful for generating full links from file paths.

### tags/hosts/prefixes <Badge type="tip" text="Enterprise" />

List of `tags` <CB prev />, `hosts` <CB prev />, `prefixes` <CB prev /> to purge, CSV or Newline Delimited.

For more information view docs for purge by [tags](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/), [hostname](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-hostname/), [prefix](https://developers.cloudflare.com/cache/how-to/purge-cache/purge_by_prefix/).

### fail <CB />

When purging multiple domains, set when the action should fail.

Options are `all` <CB prev /> , `any` <CB prev />, `none` <CB prev /> .

Default: `all`

### dry_run <CB /> {#dry_run}

With this enabled it will only output the results and not purge any cache.

Default: `false`

### summary <CB />

Write a Summary for the job. To disable this set to `false`.

Default: `true`

::: details View Job Summary

---

<!--@include: include/summary.md-->

:::

## Examples

With minimal inputs, this will **purge everything**:

```yaml
- name: 'Purge Cache Action'
  uses: cssnr/cloudflare-purge-cache-action@v2
  with:
    token: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    zones: cssnr.com,example.com
```

To limit what is purged, specify either `files`, `tags`, `hosts`, or `prefixes`.

With all inputs:

```yaml
- name: 'Purge Cache Action'
  uses: cssnr/cloudflare-purge-cache-action@v2
  with:
    token: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    zones: cssnr.com
    files: |
      favicon.ico
      static/logo.png
    prefix: 'https://cssnr.com/'
    tags: prod, dev
    hosts: example.com, dev.example.com
    prefixes: |
      example.com
      example.com/foo
    fail: all
    summary: true
    dry_run: false
```

Workflow Example.

```yaml
name: 'Cloudflare Purge Cache'

on:
  push:

jobs:
  test:
    name: 'Test'
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: 'Purge Cache Action'
        uses: cssnr/cloudflare-purge-cache-action@v2
        with:
          token: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          zones: |
            cssnr.com
            example.com
```

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/cloudflare-purge-cache-action/network/dependents

&nbsp;

<!--@include: include/wip.md-->
