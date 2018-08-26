import Vue from "vue"
import NavSide from "./NavSide.vue"

Vue.config.productionTip = false
Vue.component(NavSide.name, NavSide)

// Export the compiled Vue components, and also the mixin for those who wish to use
// those methods in their own custom headers, etc.
export default { NavSide }
