import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowUpFromBracket, faBell, faBookmark, faChartBar, faComment, faEllipsis, faEllipsisV, faEnvelope, faFaceGrin, faFilm, faHashtag, faHeart, faHouse, faImage, faList,  faPollH,  faRetweet,  faSquarePollHorizontal,  faStar,  faUser, faUserSecret, } from '@fortawesome/free-solid-svg-icons'
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
library.add(faStar)
library.add(faImage)
library.add(faPollH)
library.add(faFaceGrin)
library.add(faFilm)
library.add(faSquarePollHorizontal)
library.add(faRetweet)
library.add(faComment)
library.add(faHeart)
library.add(faArrowUpFromBracket)
library.add(faEllipsisV)
library.add(faChartBar)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
