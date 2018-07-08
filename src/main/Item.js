
const data = {
  0: {
    name: 'Organizer',
    image: '0.jpg',
    price: 30
  },
  1: {
    name: 'Pencil Holder',
    image: '1.jpg'
  },
  2: {
    name: 'File Cabinet',
    image: '2.jpg'
  },
  3: {
    name: 'Blue Armchair Chair',
    image: '3.jpg'
  },
  4: {
    name: 'Dining Chair',
    image: '4.jpg'
  },
  5: {
    name: 'Desk Lamp',
    image: '5.jpg'
  },
  6: {
    name: 'Throw Pillow',
    image: '6.jpg'
  },
  7: {
    name: 'Portable Record Player',
    image: '7.jpg'
  },
  8: {
    name: 'Travel Bag',
    image: '8.jpg'
  },
  9: {
    name: 'Green Armchair',
    image: '9.jpg'
  },
  10: {
    name: 'Fuji Instant Camera',
    image: '10.jpg'
  }
}

const Item = (state, main) => {
  main.Listings.update({
    loading: true
  })

  setTimeout(() => {
    const id = state.Router.query.id
    const json = data[id]

    main.Listings.update({
      data: {
        [id]: json
      },
      loading: void 0
    })

    main.Images.fetch({
      images: [
        json.image
      ]
    })
  }, 2000)
}

export default Item
