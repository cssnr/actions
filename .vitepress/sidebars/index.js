import virustotal from './actions/virustotal.js'
import { directory, items } from './default.js'
import dockerContext from './actions/dockerContext.js'
import mirrorRepository from './actions/mirrorRepository'
import updateVersionTags from './actions/updateVersionTags'
import cloudflarePurgeCache from './actions/cloudflarePurgeCache'

export default {
  items,
  directory,
  // order of actions is irrelevant here
  actions: {
    '/virustotal/': virustotal,
    '/docker-context/': dockerContext,
    '/mirror-repository/': mirrorRepository,
    '/update-version-tags/': updateVersionTags,
    '/cloudflare-purge-cache/': cloudflarePurgeCache,
  },
}
