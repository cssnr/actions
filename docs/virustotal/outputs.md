---
title: Outputs Documentation
pageClass: outputs-page
---

# Outputs

Details about the stack are output for use in additional steps.

| Input&nbsp;Name            | Output&nbsp;Description             |
| :------------------------- | :---------------------------------- |
| [results](#results) <CB /> | Comma Seperated String of `file/id` |
| [json](#json) <CB />       | JSON Object List Results String     |

See the [Examples](examples.md) section for more options.

### results <CB /> {#results}

This is the Portainer Stack ID used by portainer to identify the stack.

<details><summary>Example Results</summary>

```text
install-linux.deb/ODA3ZWUyN2E4YjhjMTJlODRlZTBmOTJjMmE5MzBlMmQ6MTcyNjg3MjQyMw==,install-macos.pkg/YTAwN2I4MWQwZjkzNDJjZTVmMWFhNzBjY2Y0ZGJkODE6MTcyNjg3MjQyNQ==,install-win.exe/N2JlODFiMWMwZGY1M2EzMzg5MWY1ZDQ0N2QyMWU0MWI6MTcyNjg3MjQyNw==
```

</details>

### json <CB /> {#json}

This is the Portainer Swarm ID that the stack was deployed too.

<details><summary>Example JSON</summary>

```json
[
  {
    "id": "ODA3ZWUyN2E4YjhjMTJlODRlZTBmOTJjMmE5MzBlMmQ6MTcyNjg3MjQyMw==",
    "name": "install-linux.deb",
    "link": "https://www.virustotal.com/gui/file-analysis/ODA3ZWUyN2E4YjhjMTJlODRlZTBmOTJjMmE5MzBlMmQ6MTcyNjg3MjQyMw=="
  },
  {
    "id": "YTAwN2I4MWQwZjkzNDJjZTVmMWFhNzBjY2Y0ZGJkODE6MTcyNjg3MjQyNQ==",
    "name": "install-macos.pkg",
    "link": "https://www.virustotal.com/gui/file-analysis/YTAwN2I4MWQwZjkzNDJjZTVmMWFhNzBjY2Y0ZGJkODE6MTcyNjg3MjQyNQ=="
  },
  {
    "id": "N2JlODFiMWMwZGY1M2EzMzg5MWY1ZDQ0N2QyMWU0MWI6MTcyNjg3MjQyNw==",
    "name": "install-win.exe",
    "link": "https://www.virustotal.com/gui/file-analysis/N2JlODFiMWMwZGY1M2EzMzg5MWY1ZDQ0N2QyMWU0MWI6MTcyNjg3MjQyNw=="
  }
]
```

</details>
