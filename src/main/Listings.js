
const Listings = ([, main]) => {
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

export default Listings
