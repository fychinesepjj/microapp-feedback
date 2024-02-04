import createRouterLayout from './utils/createRouterLayout'
import DefaultLayout from '@/layouts/Default.vue'

const layouts = {
  default : () => DefaultLayout
}

export const RouterLayout = createRouterLayout(layouts)

export default layouts