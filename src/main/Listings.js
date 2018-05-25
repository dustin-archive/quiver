
const Listings = (s, main) => {
  setTimeout(() => {
    main.Listings.update({
      listings: [
        {
          id: '0',
          name: '0',
          image: '0.jpg'
        },
        {
          id: '1',
          name: '1',
          image: '1.jpg'
        },
        {
          id: '2',
          name: '2',
          image: '2.jpg'
        },
        {
          id: '3',
          name: '3',
          image: '3.jpg'
        },
        {
          id: '4',
          name: '4',
          image: '4.jpg'
        },
        {
          id: '5',
          name: '5',
          image: '5.jpg'
          // wide: true
        },
        {
          id: '6',
          name: '6',
          image: '6.jpg'
        },
        {
          id: '7',
          name: '7',
          image: '7.jpg'
        },
        {
          id: '8',
          name: '8',
          image: '8.jpg'
        },
        {
          id: '9',
          name: '9',
          image: '9.jpg'
        },
        {
          id: '10',
          name: '10',
          image: '10.jpg'
        }
      ]
    })
  }, 1000)
}

export default Listings
