//render other components pass them data may have other callback functions get data typically class components 
import React from "react";
import { connect } from "react-redux";
import {Route} from 'react-router-dom'
import { fetchLooks } from "../actions/fetchLooks";
import Look from "../components/Look";
import Looks from "../components/Looks";
import LookForm from "../components/LookForm";

class LooksContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLooks();
  }
  render() {
    return (
      <div>
          <Route path='/looks/new' component={LookForm}/>
          <Route path='/looks/:id' render={(routerProps) => <Look {...routerProps} looks={this.props.looks}/>} />
          <Route exact path='/looks' render={(routerProps) => <Looks {...routerProps} looks={this.props.looks}/>} />
       </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    looks: state.looks
  };
};

export default connect(mapStateToProps, { fetchLooks })(LooksContainer);

