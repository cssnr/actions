import sidebar from '../default.js'

const base = '/cloudflare-purge-cache'

export default [
  {
    text: 'Cloudflare Purge Cache',
    base,
    items: [
      { text: 'Get Started', link: '/' },
      // { text: 'Features', link: '/features' },
    ],
  },
  {
    text: 'Documentation',
    base,
    items: [
      { text: 'Inputs', link: '/inputs' },
      { text: 'Outputs', link: '/outputs' },
      // { text: 'Examples', link: '/examples' },
    ],
  },
  ...sidebar,
]
