export const items = [
  { text: 'VirusTotal', link: '/virustotal', activeMatch: '/virustotal' },
  { text: 'Docker Context', link: '/docker-context', activeMatch: '/docker-context' },
  { text: 'Mirror Repository', link: '/mirror-repository', activeMatch: '/mirror-repository' },
  { text: 'Update Version Tags', link: '/update-version-tags', activeMatch: '/update-version-tags' },
  { text: 'Cloudflare Purge', link: '/cloudflare-purge-cache', activeMatch: '/cloudflare-purge-cache' },
  { text: 'Web Request', link: '/web-request', activeMatch: '/web-request' },
  { text: 'Actions Up', link: '/actions-up', activeMatch: '/actions-up' },
]

export const directory = {
  text: 'Actions',
  collapsed: true,
  items: items,
}

export default [
  {
    text: 'Site Links',
    collapsed: true,
    items: [
      { text: 'Actions', link: '/actions' },
      { text: 'Development', link: '/development' },
      { text: 'Support', link: '/support' },
    ],
  },
  directory,
]
