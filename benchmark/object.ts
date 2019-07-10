class ObjectCache {
  cache: any;
  constructor () {
    this.cache = {}
  }

  has (key: keyof any) {
    return (key in this.cache)
  }

  get (key: keyof any) {
    return this.cache[key]
  }

  set (key: keyof any, value:any) {
    this.cache[key] = value
  }

  clear (key: keyof any) {
    delete this.cache[key]
  }
}

export default {
  create: () => new ObjectCache(),
  label: 'Object'
}