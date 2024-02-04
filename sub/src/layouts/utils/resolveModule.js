export default function resolveModule(module) {
  if(module && module.__esModule) {
    return module.default
  }
  return module
}