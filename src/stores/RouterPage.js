
const pathIndex = paths => paths.indexOf(window.location.hash.slice(1))

const RouterPage = {
  init: data => data,
  next: d => ({ paths }) => {
    window.location.hash = paths[pathIndex(paths) + 1]
  },
  prev: d => ({ paths }) => {
    window.location.hash = paths[pathIndex(paths) - 1]
  }
}

export default RouterPage
