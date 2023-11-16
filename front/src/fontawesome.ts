import { type Plugin } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const fontawsomePlugin: Plugin = {
  install(app) {
    library.add(faAngleRight)
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
