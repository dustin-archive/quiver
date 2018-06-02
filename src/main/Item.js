
const Item = (state, main) => {
  const id = state.Router.query.id

  setTimeout(() => {
    main.Listings.update({
      [id]: {
        name: id,
        image: id + '.jpg'
      }
    })
  }, 3000)
}

export default Item
