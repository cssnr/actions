---
pageClass: index-page
prev:
  text: Actions
  link: /actions
---

# Docker Context Action

<Badges owner="cssnr" repo="docker-context-action" />

[Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)

Set up a docker context in the current workflow to run `docker` commands in subsequent steps.

```yaml
steps:
  - name: 'Docker Context'
    uses: cssnr/docker-context-action@v1
    with:
      host: ${{ secrets.DOCKER_HOST }}
      user: ${{ secrets.DOCKER_USER }}
      pass: ${{ secrets.DOCKER_PASS }}

  - name: 'Stack Deploy'
    runs: docker stack deploy -c docker-compose.yaml --detach=false stack-name
```

<div class="tip custom-block" style="padding-top: 8px;">

See the [Inputs Documentation](inputs.md) for additional options and **default values**.

</div>

See the [README.md](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme) on [GitHub](https://github.com/cssnr/docker-context-action) for more details.

&nbsp;

<!--@include: include/wip.md-->
