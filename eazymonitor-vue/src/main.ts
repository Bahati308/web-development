import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGasPump, faTachometerAlt, faChartLine, faBell, faCog, faUser, faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

library.add(faGasPump, faTachometerAlt, faChartLine, faBell, faCog, faUser, faExclamationCircle, faExclamationTriangle)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
  