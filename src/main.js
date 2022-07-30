import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBell, faBookmark, faEllipsis, faEnvelope, faHashtag, faHouse, faList, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faTwitter)
library.add(faHouse)
library.add(faHashtag)
library.add(faBell)
library.add(faEnvelope)
library.add(faBookmark)
library.add(faList)
library.add(faUser)
library.add(faEllipsis)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
