// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Main2 from './main'
import router from '../../router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#page2',
  router,
  components: { Main2 },
  template: '<Main2/>'
})
