import sidebar from '../default.js'

const base = '/mirror-repository'

export default [
  {
    text: 'Mirror Repository Action',
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
      // { text: 'Outputs', link: '/outputs' },
      // { text: 'Examples', link: '/examples' },
    ],
  },
  ...sidebar,
]
