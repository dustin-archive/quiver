
import { h } from 'hyperapp'

const Loading = ({ data, loading }) => state =>
  loading
    ? h('div', null, 'loading...')
    : h('div', null, data)

const Reroute = d => state => {
  console.log(JSON.stringify(state, null, 2))

  return h('div', { class: 'reroute' }, [
    `Woah there! Hang tight while we process this! #${state.Router.path}`,
    Loading({
      data: state.Reroute.data,
      loading: state.Reroute.loading
    })
  ])
}

export default Reroute
