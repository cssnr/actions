import virustotal from './actions/virustotal.js'
import { directory, items } from './default.js'
import dockerContext from './actions/dockerContext.js'
import updateVersionTags from './actions/updateVersionTags'
import mirrorRepository from './actions/mirrorRepository'

export default {
  items,
  directory,
  // order of actions is irrelevant here
  actions: {
    '/virustotal/': virustotal,
    '/docker-context/': dockerContext,
    '/mirror-repository/': mirrorRepository,
    '/update-version-tags/': updateVersionTags,
  },
}
