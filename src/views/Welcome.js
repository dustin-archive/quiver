
import { h } from 'hyperapp'

const Welcome = args =>
  h('div', { class: 'welcome' }, [
    h('div', { class: 'welcome-logo' }),
    h('div', { class: 'welcome-quiver' }),
    h('a', {
      class: 'welcome-button',
      href: '#/form'
    }, 'Sign up!'),
    h('div', { class: 'welcome-agree' }, [
      'By proceeding you’re agreeing to our\n',
      h('a', { href: '#/terms-and-conditions' }, 'Terms and Conditions'),
      ' and ',
      h('a', { href: '#/privacy-policy' }, 'Privacy Policy')
    ])
  ])

export default Welcome
