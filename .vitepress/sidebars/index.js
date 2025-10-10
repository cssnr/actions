import virustotal from './actions/virustotal.js'
import { directory } from './default.js'
import dockercontext from './actions/dockercontext.js'

export default {
  directory,
  actions: {
    '/virustotal/': virustotal,
    '/docker-context/': dockercontext,
  },
}
