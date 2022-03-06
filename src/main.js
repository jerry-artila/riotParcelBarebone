import '@riotjs/hot-reload'
import * as riot from 'riot'
import App from './component/App.riot'
import url1 from './image/riot-logo.svg'
import url2 from './image/林志玲.jpg'

const mountApp = riot.component(App)

const app = mountApp(
  document.querySelector('my-app'), {
    photo1: {url: url1, width:100},
    photo2: {url: url2, width:120},
    items: [
        'riot',
        'parcel',
        '@riotjs/compiler',
        '@riotjs/parcel-transformer-riot',
        '@riotjs/hor-reload'
    ]
  }
)