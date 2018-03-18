
import { h } from 'hyperapp'

const Home = args =>
  h('div', { class: 'home' }, [
    h('div', { class: 'home-logo' }),
    // h('h1', null, 'Quiver'),
    h('div', { class: 'home-quiver' }),
    h('a', {
      class: 'home-button',
      href: '#/form'
    }, 'Sign up!'),
    h('div', { class: 'home-agree' }, [
      'By proceeding you’re agreeing to our\n',
      h('a', { href: '#/terms-and-conditions' }, 'Terms and Conditions'),
      ' and ',
      h('a', { href: '#/privacy-policy' }, 'Privacy Policy')
    ])
  ])

export default Home
