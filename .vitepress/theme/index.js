import DefaultTheme, { VPBadge } from 'vitepress/theme'
import 'virtual:group-icons.css'
import './custom.css'

import Layout from './Layout.vue'

import Badges from './components/Badges.vue'
import DarkLightImage from './components/DarkLightImage.vue'
import GitHubTable from './components/GitHubTable.vue'
import RollingTags from './components/RollingTags.vue'

import CopyButton from '@cssnr/vitepress-plugin-copybutton'
import '@cssnr/vitepress-plugin-copybutton/style.css'

// noinspection JSUnusedGlobalSymbols
export default {
  ...DefaultTheme,

  Layout: Layout,

  enhanceApp({ app }) {
    app.component('Badge', VPBadge)

    app.component('Badges', Badges)
    app.component('DarkLightImage', DarkLightImage)
    app.component('GitHubTable', GitHubTable)
    app.component('RollingTags', RollingTags)

    app.component('CB', CopyButton)
  },
}
