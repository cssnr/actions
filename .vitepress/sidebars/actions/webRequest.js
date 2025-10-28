import sidebar from '../default.js'

const base = '/web-request'

export default [
  {
    text: 'Web Request',
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
