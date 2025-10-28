---
pageClass: inputs-page
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more [Details](#details).

| Input&nbsp;Name            | Default&nbsp;Value | Short&nbsp;Description&nbsp;of&nbsp;the&nbsp;Input&nbsp;Value |
| :------------------------- | :----------------- | :------------------------------------------------------------ |
| [url](#url) <CB />         | _Required_         | URL for Request                                               |
| [method](#method) <CB />   | `POST`             | Request Method                                                |
| [data](#data) <CB />       | -                  | Request Data JSON/YAML                                        |
| [headers](#headers) <CB /> | -                  | Request Headers JSON/YAML                                     |
| [params](#params) <CB />   | -                  | Request Parameters JSON/YAML                                  |
| `username` <CB />          | -                  | Basic Auth Username                                           |
| `password` <CB />          | -                  | Basic Auth Password                                           |
| `insecure` <CB />          | `false`            | Ignore SSL Errors                                             |
| [file](#file) <CB />       | -                  | File Path to Send                                             |
| `name` <CB />              | `file`             | File Form Key Name                                            |

See the [Examples](#examples) section for more options.

## Details

### url <CB /> <Badge type="warning" text="Required" />

The URL to send the request too. You may include params here or in the [params](#params) key.

### method <CB />

The request method, including custom methods.

Default: `POST`

### data <CB />

Body JSON or YAML data. Only used for `PUT`, `POST`, `DELETE`, and `PATCH`.

Data is parsed with `JSON.parse` or `yaml.load`, [js-yaml](https://github.com/nodeca/js-yaml).

<details><summary>View Multi-Line JSON/YAML Example</summary>

```yaml
data: |
  key1: value1
  key2: value2
```

```yaml
data: |
  {
    "key1": "value1",
    "key2": "value2"
  }
```

</details>

### headers <CB />

Headers JSON or YAML data.

### params <CB />

Parameters, Query String, JSON or YAML data. These may also be provided in the [url](#url).

### file <CB />

When sending a file, `multipart/form-data` wil be used and `data` will be added to the form data with the
key `name`. The file path is relative to the workspace/working directory.

For more information on inputs, see: https://axios-http.com/docs/req_config

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
```

## Examples

💡 _Click on an example heading to expand or collapse the example._

<details open><summary>Algolia Start Crawl</summary>

```yaml
- name: 'Algolia Start Crawl'
  uses: cssnr/web-request-action@v1
  with:
    url: https://crawler.algolia.com/api/1/crawlers/${{ secrets.CRAWLER_ID }}/reindex
    username: ${{ secrets.CRAWLER_USER_ID }}
    password: ${{ secrets.CRAWLER_API_KEY }}
```

</details>
<details open><summary>Deploy to Render</summary>

```yaml
- name: 'Render Deploy'
  uses: cssnr/web-request-action@v1
  with:
    url: ${{ secrets.RENDER_HOOK }}
    params: '{"imgURL": "ghcr.io/${{ github.repository }}:${{ github.ref_name }}"}'
```

</details>
<details><summary>Make a GET Request</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/get
    method: 'GET'
```

</details>
<details><summary>Send Data</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    data: '{"key": "value"}'
```

</details>
<details><summary>Send File</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    file: path/to/file.txt
```

</details>
<details><summary>All Inputs</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    method: 'POST'
    data: '{"key": "value"}'
    headers: '{"header": "value"}'
    params: '{"parameter": "value"}'
    username: ${{ secrets.USERNAME }}
    password: ${{ secrets.PASSWORD }}
    insecure: false
    file: path/to/file.txt
    name: file
```

</details>

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/web-request-action/network/dependents

&nbsp;

<!--@include: include/wip.md-->
