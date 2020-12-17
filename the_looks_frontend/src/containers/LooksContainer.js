import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchLooks } from "../actions/fetchLooks";
import Look from "../components/Look";
import Looks from "../components/Looks";
import LookForm from "../components/LookForm";
import Home from "../components/Home"



class LooksContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLooks();
  }
  render() {
    return (
      <div>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/looks/new" component={LookForm} />
         <Route path="/looks/:id" render={(routerProps) => ( <Look {...routerProps} looks={this.props.looks} /> )}/>
         <Route exact path="/looks" render={(routerProps) => (<Looks {...routerProps} looks={this.props.looks} /> )}/>

      </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    looks: state.looks
  };
};

export default connect(mapStateToProps, { fetchLooks })(LooksContainer);
