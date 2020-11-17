//render other components pass them data may have other callback functions get data typically class components 
import React from "react";
import { connect } from "react-redux";

import { fetchLooks } from "../actions/fetchLooks";
import Looks from "../components/Looks";
import LookForm from "../components/LookForm";

class LooksContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLooks();
  }
  render() {
    return (
      <div>
        <LookForm />
        <Looks looks={this.props.looks} />
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

