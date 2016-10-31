const React = require('react')
const ReactDOM = require('react-dom')

class Root extends React.Component {
  render(){
    return  <h1> BEST APP EVER </h1>
  }
}

ReactDOM.render( <Root />, document.getElementById('root'))
