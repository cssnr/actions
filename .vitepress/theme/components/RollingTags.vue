<script setup>
// Props
const props = defineProps({
  repo: { type: String, required: true },
})
</script>

<template>
  <p>
    The following rolling
    <a :href="`https://github.com/${props.repo}/tags`" target="_blank" rel="noreferrer">tags</a> are
    maintained to improve stability across updates.
  </p>
  <table>
    <thead>
      <tr>
        <th style="text-align: left">Version&nbsp;Tag</th>
        <th style="text-align: center">Rolling</th>
        <th style="text-align: center">Bugs</th>
        <th style="text-align: center">Feat.</th>
        <th style="text-align: center">Name</th>
        <th style="text-align: center">Target</th>
        <th style="text-align: left">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left">
          <a :href="`https://github.com/${props.repo}/releases`" target="_blank" rel="noreferrer"
            ><img
              :src="`https://img.shields.io/github/v/tag/${props.repo}?sort=semver&amp;filter=!v*.*&amp;style=for-the-badge&amp;label=%20&amp;color=44cc10`"
              alt="GitHub Tag Major"
          /></a>
        </td>
        <td style="text-align: center">✅</td>
        <td style="text-align: center">✅</td>
        <td style="text-align: center">✅</td>
        <td style="text-align: center"><strong>Major</strong></td>
        <td style="text-align: center"><code>vN.x.x</code></td>
        <td style="text-align: left"><code>vN</code></td>
      </tr>
      <tr>
        <td style="text-align: left">
          <a :href="`https://github.com/${props.repo}/releases`" target="_blank" rel="noreferrer"
            ><img
              :src="`https://img.shields.io/github/v/tag/${props.repo}?sort=semver&amp;filter=!v*.*.*&amp;style=for-the-badge&amp;label=%20&amp;color=blue`"
              alt="GitHub Tag Minor"
          /></a>
        </td>
        <td style="text-align: center">✅</td>
        <td style="text-align: center">✅</td>
        <td style="text-align: center">❌</td>
        <td style="text-align: center"><strong>Minor</strong></td>
        <td style="text-align: center"><code>vN.N.x</code></td>
        <td style="text-align: left"><code>vN.N</code></td>
      </tr>
      <tr>
        <td style="text-align: left">
          <a :href="`https://github.com/${props.repo}/releases`" target="_blank" rel="noreferrer"
            ><img
              :src="`https://img.shields.io/github/v/release/${props.repo}?style=for-the-badge&amp;label=%20&amp;color=red`"
              alt="GitHub Release"
          /></a>
        </td>
        <td style="text-align: center">❌</td>
        <td style="text-align: center">❌</td>
        <td style="text-align: center">❌</td>
        <td style="text-align: center"><strong>Micro</strong></td>
        <td style="text-align: center"><code>vN.N.N</code></td>
        <td style="text-align: left"><code>vN.N.N</code></td>
      </tr>
    </tbody>
  </table>

  <p>
    You can view the release notes for each version on the
    <a :href="`https://github.com/${props.repo}/releases`" target="_blank" rel="noreferrer">releases</a>
    page.
  </p>

  <p>
    The <strong>Major</strong> tag is recommended. It is the most up-to-date and always backwards compatible.
    Breaking changes would result in a <strong>Major</strong> version bump. At a minimum you should use a
    <strong>Minor</strong> tag.
  </p>

  <h3 id="tags-security-notice" tabindex="-1">
    Tags Security Notice
    <a class="header-anchor" href="#tags-security-notice" aria-label='Permalink to "Tags Security Notice"'
      >​</a
    >
  </h3>

  <p>
    As shown above, tags are mutable; however, <strong>commit hashes are not</strong>. Therefore, if security
    is your top priority, you should pin your actions to a specific commit hash.
  </p>

  <ul>
    <li>
      <a
        href="https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions"
        target="_blank"
        rel="noreferrer"
        >GitHub Documentation</a
      >
    </li>
    <li>
      <a
        href="https://www.stepsecurity.io/blog/pinning-github-actions-for-enhanced-security-a-complete-guide"
        target="_blank"
        rel="noreferrer"
        >Article by StepSecurity</a
      >
    </li>
  </ul>

  <h3 id="updating-actions" tabindex="-1">
    Updating Actions
    <a class="header-anchor" href="#updating-actions" aria-label='Updating Actions"'>​</a>
  </h3>

  <p>
    If you prefer to manually update actions, then
    <a href="https://github.com/azat-io/actions-up" target="_blank" rel="noreferrer">azat-io/actions-up</a>
    was created to allow you to easily and securely do this using an interactive CLI with optional excludes.
  </p>
  <p>
    I also created
    <a href="https://github.com/cssnr/actions-up-action" target="_blank" rel="noreferrer"
      >cssnr/actions-up-action</a
    >
    that will run this for you automatically and generate a markdown table for pull requests.
  </p>

  <details>
    <summary>View Example Markdown Table</summary>
    Scanned 8 workflows, checked 12 actions and found 6 updates.

    <details open>
      <summary>Results</summary>

      <table tabindex="0">
        <thead>
          <tr>
            <th style="text-align: left">Name</th>
            <th style="text-align: left">File</th>
            <th style="text-align: center">Breaking</th>
            <th style="text-align: center">Latest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              <a href="https://github.com/cssnr/check-build-action" target="_blank" rel="noreferrer"
                >cssnr/check-build-action</a
              >
            </td>
            <td style="text-align: left">
              <a
                href="https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/check-build.yaml#L48"
                target="_blank"
                rel="noreferrer"
                >check-build.yaml</a
              >
            </td>
            <td style="text-align: center">-</td>
            <td style="text-align: center">v1.1.0</td>
          </tr>
          <tr>
            <td style="text-align: left">
              <a href="https://github.com/cssnr/label-creator-action" target="_blank" rel="noreferrer"
                >cssnr/label-creator-action</a
              >
            </td>
            <td style="text-align: left">
              <a
                href="https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/labeler.yaml#L44"
                target="_blank"
                rel="noreferrer"
                >labeler.yaml</a
              >
            </td>
            <td style="text-align: center">-</td>
            <td style="text-align: center">v1.0.2</td>
          </tr>
          <tr>
            <td style="text-align: left">
              <a href="https://github.com/cssnr/mirror-repository-action" target="_blank" rel="noreferrer"
                >cssnr/mirror-repository-action</a
              >
            </td>
            <td style="text-align: left">
              <a
                href="https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/mirror.yaml#L26"
                target="_blank"
                rel="noreferrer"
                >mirror.yaml</a
              >
            </td>
            <td style="text-align: center">-</td>
            <td style="text-align: center">v1.2.0</td>
          </tr>
          <tr>
            <td style="text-align: left">
              <a href="https://github.com/cssnr/update-version-tags-action" target="_blank" rel="noreferrer"
                >cssnr/update-version-tags-action</a
              >
            </td>
            <td style="text-align: left">
              <a
                href="https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/release.yaml#L19"
                target="_blank"
                rel="noreferrer"
                >release.yaml</a
              >
            </td>
            <td style="text-align: center">-</td>
            <td style="text-align: center">v1.3.1</td>
          </tr>
          <tr>
            <td style="text-align: left">
              <a href="https://github.com/cssnr/package-changelog-action" target="_blank" rel="noreferrer"
                >cssnr/package-changelog-action</a
              >
            </td>
            <td style="text-align: left">
              <a
                href="https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/release.yaml#L36"
                target="_blank"
                rel="noreferrer"
                >release.yaml</a
              >
            </td>
            <td style="text-align: center">⚠️</td>
            <td style="text-align: center">v2.0.0</td>
          </tr>
          <tr>
            <td style="text-align: left">
              <a href="https://github.com/cssnr/update-version-tags-action" target="_blank" rel="noreferrer"
                >cssnr/update-version-tags-action</a
              >
            </td>
            <td style="text-align: left">
              <a
                href="https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/tags.yaml#L21"
                target="_blank"
                rel="noreferrer"
                >tags.yaml</a
              >
            </td>
            <td style="text-align: center">-</td>
            <td style="text-align: center">v1.3.1</td>
          </tr>
        </tbody>
      </table>
    </details>
  </details>
</template>
