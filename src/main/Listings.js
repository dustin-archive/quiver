
const Listings = (s, main) => {
  main.Listings.update({
    loading: true
  })

  setTimeout(() => {
    const json = {
      images: [
        '0.jpg',
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg'
      ],
      data: {
        0: { name: '0', image: '0.jpg' },
        1: { name: '1', image: '1.jpg' },
        2: { name: '2', image: '2.jpg' },
        3: { name: '3', image: '3.jpg' },
        4: { name: '4', image: '4.jpg' },
        5: { name: '5', image: '5.jpg' },
        6: { name: '6', image: '6.jpg' },
        7: { name: '7', image: '7.jpg' },
        8: { name: '8', image: '8.jpg' },
        9: { name: '9', image: '9.jpg' },
        10: { name: '10', image: '10.jpg' }
      }
    }

    main.Listings.update({
      data: json.data,
      loading: void 0
    })

    main.Images.fetch({
      images: json.images
    })
  }, 2000)
}

export default Listings
