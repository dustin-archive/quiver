
const Home = m => {
  console.log('home')
}

const Listings = main => {
  setTimeout(() => {
    main.Listings.update({
      listings: [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
      ]
    })
  }, 3000)
}

const NotFound = m => {
  console.log('No callbacks')
}

const RouterInit = main => {
  // init Router
  main.Router.init()

  // get app state
  const state = main.getState()

  // map paths to callbacks
  const routes = {
    '': Home,
    '/listings': Listings
  }

  // call callback
  ;(routes[state.Router.path] || NotFound)(main)
}

export default RouterInit
