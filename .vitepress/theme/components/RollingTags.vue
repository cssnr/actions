<script setup>
// Props
const props = defineProps({
  repo: { type: String, default: 'cssnr/virustotal-action' },
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
</template>
