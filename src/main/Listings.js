
const Listings = (s, main) => {
  setTimeout(() => {
    main.Listings.update({
      listings: [
        {
          name: '0',
          image: '0.jpg'
        },
        {
          name: '1',
          image: '1.jpg'
        },
        {
          name: '2',
          image: '2.jpg'
        },
        {
          name: '3',
          image: '3.jpg'
        },
        {
          name: '4',
          image: '4.jpg'
        },
        {
          name: '5',
          image: '5.jpg'
          // wide: true
        },
        {
          name: '6',
          image: '6.jpg'
        },
        {
          name: '7',
          image: '7.jpg'
        },
        {
          name: '8',
          image: '8.jpg'
        },
        {
          name: '9',
          image: '9.jpg'
        },
        {
          name: '10',
          image: '10.jpg'
        }
      ]
    })
  }, 1000)
}

export default Listings
