import actions from '../theme/configs/actions.js'

export const directory = {
  text: 'Actions',
  collapsed: true,
  items: actions,
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
