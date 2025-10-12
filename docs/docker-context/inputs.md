---
pageClass: inputs-page
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more [Details](#details).

| Input&nbsp;Name                        | Default&nbsp;Value | Short&nbsp;Description&nbsp;of&nbsp;the&nbsp;Input&nbsp;Value |
| :------------------------------------- | :----------------- | :------------------------------------------------------------ |
| [host](#host) <CB />                   | _Required_         | Remote Docker Hostname or IP                                  |
| [port](#port) <CB />                   | `22`               | Remote Docker Port                                            |
| [user](#user) <CB />                   | _Required_         | Remote Docker Username                                        |
| [pass](#pass) <CB />                   | _Required_         | Remote Docker Password                                        |
| [ssh_key](#ssh_key) <CB />             | _Required_         | Remote SSH Key File                                           |
| [registry_host](#registry_host) <CB /> | -                  | Registry Authentication Host                                  |
| [registry_user](#registry_user) <CB /> | -                  | Registry Authentication Username                              |
| [registry_pass](#registry_pass) <CB /> | -                  | Registry Authentication Password                              |

See the [Examples](#examples) section for more options.

## Details

### host <CB /> <Badge type="warning" text="Required" />

The hostname or IP address of the remote docker server to deploy too.
If your hostname is behind a proxy like Cloudflare you will need to use the IP address.

You may be able to find your Public IP with one of these commands.

::: code-group

```shell [curl ~vscode-icons:file-type-shell~]
curl ip.me
```

```shell [curl -4 ~vscode-icons:file-type-shell~]
curl -4 ifconfig.co
```

```shell [wget ~vscode-icons:file-type-shell~]
echo $(wget -qO- https://ipecho.net/plain)
```

```shell [dig ~vscode-icons:file-type-shell~]
dig TXT +short o-o.myaddr.l.google.com @ns1.google.com
```

:::

### port <CB />

SSH Port. Only set this if using a non-standard port.

Default: `22`

### user <CB /> <Badge type="warning" text="Required" />

SSH Username. This user **must** have permissions to access docker.

If you use `sudo` or the `root` user to access docker,
it is recommended you grant docker access to another user or service account.

Replace `mynewuser` with your actual username.

```shell [run ~vscode-icons:file-type-shell~]
sudo usermod -aG docker mynewuser
```

After this you should be able to run `docker` commands as `mynewuser` without `sudo`.
Note, you may need to log out and back in for the changes to take effect.

### pass <CB /> <Badge type="warning" text="Required" />

You must provide either a `pass` or [ssh_key](#ssh_key), but **not** both.

When using a password, a temporary key is generated using [ssh-keygen](https://linux.die.net/man/1/ssh-copy-id)
and copied to the host with [ssh-copy-id](https://linux.die.net/man/1/ssh-copy-id) using [sshpass](https://linux.die.net/man/1/sshpass).
The authorized_keys file entry is [cleaned up](https://github.com/cssnr/stack-deploy-action/blob/master/src/main.sh#L10) after each deploy.

### ssh_key <CB /> <Badge type="warning" text="Required" /> {#ssh_key}

You must provide either a `ssh_key` or [pass](#pass), but **not** both.

To generate an SSH key, run the following as the deployment [user](#user):

::: code-group

```shell [ed25519 ~vscode-icons:file-type-shell~]
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""
cat ~/.ssh/id_ed25519
```

```shell [rsa ~vscode-icons:file-type-shell~]
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""
cat ~/.ssh/id_rsa
```

:::

### registry_host <CB /> {#registry_host}

To run [docker login](https://docs.docker.com/reference/cli/docker/login/) on another registry.

Example: `ghcr.io`

### registry_pass <CB /> {#registry_pass}

Required to run [docker login](https://docs.docker.com/reference/cli/docker/login/) before stack deploy.

### registry_user <CB /> {#registry_user}

Required to run [docker login](https://docs.docker.com/reference/cli/docker/login/) before stack deploy.

## Examples

```yaml
steps:
  - name: 'Docker Context'
    uses: cssnr/docker-context-action@v1
    with:
      host: ${{ secrets.DOCKER_HOST }}
      user: ${{ secrets.DOCKER_USER }}
      port: 22 # 22 is the default value - optional
      pass: ${{ secrets.DOCKER_PASS }} # or ssh_key - optional
      ssh_key: ${{ secrets.DOCKER_SSH_KEY }} # or pass - optional

  - name: 'Inspect Docker'
    runs: |
      docker context ls
      docker context inspect
      docker info
      docker ps
```

&nbsp;

<!--@include: include/wip.md-->
