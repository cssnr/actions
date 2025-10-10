import sidebar from '../default.js'

const base = '/docker-context'

export default [
  {
    text: 'Docker Context Action',
    base,
    items: [
      { text: 'Get Started', link: '/' },
      // { text: 'Features', link: '/features' },
    ],
  },
  // {
  //   text: 'Documentation',
  //   base,
  //   items: [
  //     { text: 'Inputs', link: '/inputs' },
  //     { text: 'Outputs', link: '/outputs' },
  //     { text: 'Examples', link: '/examples' },
  //   ],
  // },
  // {
  //   text: 'Links',
  //   base,
  //   items: [
  //     { text: 'GitHub', link: 'https://github.com/cssnr/virustotal-action', target: '_blank' },
  //     { text: 'Marketplace', link: 'https://github.com/cssnr/virustotal-action' },
  //   ],
  // },
  ...sidebar,
]
