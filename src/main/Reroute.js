
const Reroute = (state, main) => {
  console.log(`Woah there! Hang tight while we process this! #${state.Router.path}`)

  main.Reroute.update({
    loading: true
  })

  setTimeout(() => {
    main.Reroute.update({
      loading: false,
      data: 'O boi look at all this data! Now wait 3 seconds to go home.'
    })

    setTimeout(() => {
      main.Router.route({
        path: '/home'
      })
    }, 3000)
  }, 3000)
}

export default Reroute
