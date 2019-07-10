function hasSupport () {
  var hasSupport = true

  try {
    var map = new Map()
    map.set(null, undefined)
  } catch (error) {
    hasSupport = false
  }

  return hasSupport
}

function create () {
  var cache = new Map()
  return cache
}

export default {
  create: create,
  hasSupport: hasSupport,
  label: 'Map'
}