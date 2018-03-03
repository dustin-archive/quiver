
const RouterInit = main => {
  // const state = main.getState()
  // const args = [state, main]

  main.Router.init({
    '': () => console.log('home'),
    '/test': () => console.log('test')
  })
}

export default RouterInit
