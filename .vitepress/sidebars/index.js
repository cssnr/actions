import virustotal from './actions/virustotal.js'
import { directory, items } from './default.js'
import dockerContext from './actions/dockerContext.js'
import updateVersionTags from './actions/updateVersionTags'

export default {
  items,
  directory,
  actions: {
    '/virustotal/': virustotal,
    '/docker-context/': dockerContext,
    '/update-version-tags/': updateVersionTags,
  },
}
