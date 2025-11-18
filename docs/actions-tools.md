---
title: Actions Tools
---

<a href="https://actions-tools.cssnr.com/" target="_blank">
<img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions-tools/logo256.png"
    alt="Actions Tools" width="128" height="128" style="float: right;">
</a>

# Actions Tools

[![PyPI Version](https://img.shields.io/pypi/v/actions-tools?logo=pypi&logoColor=white&label=pypi&color=3e7bac)](https://pypi.org/project/actions-tools/)
[![TOML Python Version](https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fcssnr%2Factions-tools%2Frefs%2Fheads%2Fmaster%2Fpyproject.toml&query=%24.project.requires-python&logo=python&logoColor=white&label=python&color=yellow)](https://github.com/cssnr/actions-tools?tab=readme-ov-file#readme)
[![PyPI Downloads](https://img.shields.io/pypi/dm/actions-tools?logo=pypi&logoColor=white)](https://pypistats.org/packages/actions-tools)
[![Codecov](https://img.shields.io/codecov/c/github/cssnr/actions-tools?token=A8NDHZ393X&logo=codecov&logoColor=white)](https://codecov.io/gh/cssnr/actions-tools)

If you are writing Actions in Python I created a Python Actions Toolkit to provide similar functionality to [actions/toolkit](https://github.com/actions/toolkit).

- https://actions-tools.cssnr.com/

### Install

From PyPI: https://pypi.org/p/actions-tools

::: code-group

```text [pip ~vscode-icons:file-type-python~]
python -m pip install actions-tools
```

```text [uv ~vscode-icons:file-type-uv~]
uv add actions-tools
```

```text [requirements.txt ~vscode-icons:file-type-text~]
actions-tools
```

```text [pyproject.toml ~vscode-icons:file-type-toml~]
dependencies = ["actions-tools"]
```

:::

With [PyGithub](https://github.com/PyGithub/PyGithub) (for GitHub API access).

::: code-group

```text [pip ~vscode-icons:file-type-python~]
python -m pip install actions-tools[github]
```

```text [uv ~vscode-icons:file-type-uv~]
uv add actions-tools[github]
```

```text [requirements.txt ~vscode-icons:file-type-text~]
actions-tools[github]
```

```text [pyproject.toml ~vscode-icons:file-type-toml~]
dependencies = ["actions-tools[github]"]
```

:::

### Usage

After [installing](#install) import the module and start [using](https://actions-tools.cssnr.com/usage/) the methods...

```python
from actions import core, context

token = core.get_input("token", True)
g = core.get_github(token)
repo = g.get_repo(f"{context.repository}")
core.info(f"repo.name: {repo.name}")
core.set_output("name", repo.name)
```

This is just a simple example, make sure to view the [Usage Guide](https://actions-tools.cssnr.com/usage/).

::: tip Usage

View the complete [Usage Guide](https://actions-tools.cssnr.com/usage/).

:::

### Actions

These are actions are using [actions-tools](https://github.com/cssnr/actions-tools):

- Create Files Action: [cssnr/create-files-action](https://github.com/cssnr/create-files-action)
- Python Action Template: [smashedr/test-action-py](https://github.com/smashedr/test-action-py)
- Python UV Action Template: [smashedr/test-action-uv](https://github.com/smashedr/test-action-uv)
