---
pageClass: outputs-page
title: Outputs Documentation
---

# Outputs

Details about the stack are output for use in additional steps.

| Output&nbsp;Name           | Output&nbsp;Description |
| :------------------------- | :---------------------- |
| [status](#status) <CB />   | Response Status         |
| [headers](#headers) <CB /> | Response Headers        |
| [data](#data) <CB />       | Response Data           |

See the [Workflow Usage](#workflow-usage) section for example usage.

### status <CB />

Response Status Code

### headers <CB />

Response Headers

### data <CB />

Response Data

## Workflow Usage

Using the outputs in a workflow.

```yaml
- name: 'Web Request'
  id: test
  uses: cssnr/web-request-action@v2
  with:
    url: https://httpbin.org/post

- name: 'Echo Output'
  run: |
    echo 'status: ${{ steps.test.outputs.status }}'
    echo 'headers: ${{ steps.test.outputs.headers }}'
    echo 'data: ${{ steps.test.outputs.data }}'
```

&nbsp;

<!--@include: include/wip.md-->
