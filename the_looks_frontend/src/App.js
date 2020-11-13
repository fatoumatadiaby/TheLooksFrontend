import React from "react";
import {connect} from 'react-redux'
import {fetchLooks} from './actions/fetchLooks'

class App extends React.Component {
  componentDidMount() {
     this.props.fetchLooks
  }
  
  render() {
    return (
      <div className="App">
        App
      </div>
  );
}
}


export default connect(null, {fetchLooks})(App);
