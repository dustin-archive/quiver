
const Item = (state, main) => {
  const id = state.Router.query.id

  main.Listings.update({ loading: true })

  // init data
  const data = state.Listings.data || {}

  // mutate existing data
  data[id] = {
    name: id,
    image: id + '.jpg'
  }

  setTimeout(() => {
    main.Listings.update({
      data,
      loading: null
    })
  }, 3000)
}

export default Item
