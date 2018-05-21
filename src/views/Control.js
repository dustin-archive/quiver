
import { h } from 'hyperapp'

const Button = ({ label, icon }) =>
  h('a', { class: 'control-button' }, [
    h('div', { class: '_material-icons' }, icon)
    // h('div', { class: 'control-label' }, label)
  ])

const Control = d =>
  h('div', { class: 'control' }, [
    Button({
      label: 'Filter',
      icon: 'tune'
    }),
    Button({
      label: 'Menu',
      icon: 'menu'
    })
  ])

export default Control
