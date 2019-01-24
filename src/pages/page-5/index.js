// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Main5 from './main'
import router from '../../router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#page5',
  router,
  components: { Main5 },
  template: '<App5/>'
})
