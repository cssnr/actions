---
pageClass: outputs-page
title: Outputs Documentation
---

# Outputs

Details about the stack are output for use in additional steps.

| Input&nbsp;Name            | Output&nbsp;Description |
| :------------------------- | :---------------------- |
| [success](#success) <CB /> | Successful Zones, CSV   |
| [failed](#failed) <CB />   | Failed Zones, CSV       |

See the [Examples](examples.md) section for more options.

### success <CB /> {#success}

Comma Seperated string of Successful Zones

### failed <CB /> {#failed}

Comma Seperated string of Failed Zones

## Workflow Usage

Using the outputs in a workflow.

```yaml
- name: 'Purge Cache Action'
  id: purge
  uses: cssnr/cloudflare-purge-cache-action@v2
  with:
    token: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    zones: cssnr.com,example.com

- name: 'Echo Output'
  run: |
    echo "success: '${{ steps.purge.outputs.success }}'"
    echo "failed: '${{ steps.purge.outputs.failed }}'"
```

&nbsp;

<!--@include: include/wip.md-->
