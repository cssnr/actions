---
title: Actions Tools
---

<a href="https://actions-tools.cssnr.com/" target="_blank">
<img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions-tools/logo256.png"
    alt="Actions Tools" width="128" height="128" style="float: right;">
</a>

# Actions Tools

[![PyPI Version](https://img.shields.io/pypi/v/actions-tools?logo=pypi&logoColor=white&label=pypi&color=3e7bac)](https://pypi.org/project/actions-tools/)
[![PyPI Downloads](https://img.shields.io/pypi/dm/actions-tools?logo=pypi&logoColor=white)](https://pepy.tech/projects/actions-tools)
[![Codecov](https://img.shields.io/codecov/c/github/cssnr/actions-tools?token=A8NDHZ393X&logo=codecov&logoColor=white)](https://codecov.io/gh/cssnr/actions-tools)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/actions-tools?logo=github&logoColor=white&label=updated)](https://github.com/cssnr/actions-tools/?tab=readme-ov-file#readme)

If you are writing Actions in Python I created a Python Actions Toolkit to provide similar functionality to [actions/toolkit](https://github.com/actions/toolkit).

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

This is just a simple example, make sure to view the [Usage Guide](https://actions-tools.cssnr.com/usage/).

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
