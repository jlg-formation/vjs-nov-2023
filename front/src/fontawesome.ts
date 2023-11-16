import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleRight,
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { type Plugin } from 'vue'

export const fontawsomePlugin: Plugin = {
  install(app) {
    library.add(faAngleRight, faRotateRight, faPlus, faTrashCan, faCircleNotch)
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
