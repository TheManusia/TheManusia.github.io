import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 1000
    })
  },
}).$mount('#app')
