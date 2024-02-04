import { h } from 'vue'
import resolveModule from './resolveModule'


export default (layouts = {}) => {
  let layoutModules = {}
  let currentLayoutName = ''

  const lazyLoadModule = async page => {
    const name = page.meta.layout || 'default'
    if(name && !layoutModules[name]) {
      layoutModules[name] = await layouts[name]()
    }
    currentLayoutName = name
  }

  return {
    name: 'RouterLayout',
    render() {
      const layout = currentLayoutName && resolveModule(layoutModules[currentLayoutName])
      if(!currentLayoutName || !layout) {
        return null
      }

      return h(layout, { key: currentLayoutName })
    },
    async beforeRouteEnter(to, _from, next) {
      try {
        await lazyLoadModule(to)
        next()
      } catch(e){
        next(e)
      }
    },
    async beforeRouteUpdate(to, _from, next) {
      try {
        await lazyLoadModule(to)
        next()
      } catch(e){
        next(e)
      }
    }
  }
}