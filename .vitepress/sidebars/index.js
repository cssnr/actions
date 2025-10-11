import virustotal from './actions/virustotal.js'
import { directory, items } from './default.js'
import dockercontext from './actions/dockercontext.js'

export default {
  items,
  directory,
  actions: {
    '/virustotal/': virustotal,
    '/docker-context/': dockercontext,
  },
}
