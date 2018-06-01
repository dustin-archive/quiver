
const Item = (state, main) => {
  const id = state.Router.query.id

  setTimeout(() => {
    console.log(id)

    main.Listings.update({
      listings: {
        [id]: {
          name: id,
          image: id + '.jpg'
        }
      }
    })
  }, 250)
}

export default Item
