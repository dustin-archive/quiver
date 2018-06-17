
const pathIndex = paths => paths.indexOf(window.location.hash.slice(1))

const RouterPage = {
  init: data => data,
  next: d => state => {
    window.location.hash = state.paths[pathIndex(state.paths) + 1]
  },
  prev: d => state => {
    window.location.hash = state.paths[pathIndex(state.paths) - 1]
  }
}

export default RouterPage
