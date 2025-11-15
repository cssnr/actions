---
title: Actions Tools
---

<a href="https://actions-tools.cssnr.com/" target="_blank">
<img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions-tools/logo256.png"
    alt="Actions Tools" width="128" height="128" style="float: right;">
</a>

# Actions Tools

[[toc]]

## Python

I created a Python Actions Toolkit to provide similar functionality to [actions/toolkit](https://github.com/actions/toolkit).

- https://actions-tools.cssnr.com/

### Install

From PyPI: https://pypi.org/p/actions-tools

```shell
python -m pip install actions-tools
```

With [PyGithub](https://github.com/PyGithub/PyGithub) (for GitHub API access).

```shell
python -m pip install actions-tools[github]
```

Add to requirements.

::: code-group

```text [readme.txt ~vscode-icons:file-type-text~]
actions-tools
```

```text [with PyGithub ~vscode-icons:folder-type-github~]
actions-tools[github]
```

:::

### Usage

```python
from actions import core, context

token = core.get_input("token", True)
g = core.get_github(token)
repo = g.get_repo(f"{context.repository}")
core.info(f"repo.name: {repo.name}")
```

::: tip Usage

View the complete [Usage Guide](https://actions-tools.cssnr.com/usage/).

:::

## JavaScript

If you are creating a JavaScript Action you should use the official toolkit:

- [https://github.com/actions/toolkit](https://github.com/actions/toolkit?tab=readme-ov-file#packages)
