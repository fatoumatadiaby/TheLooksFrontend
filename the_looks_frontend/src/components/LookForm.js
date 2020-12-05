import React from "react";
import {connect} from 'react-redux';
import {addLook} from "../actions/addLook";
// import Products from '/Products'

class LookForm extends React.Component {
 state = {
  title: '', 
  note:'', 
  date: '',
  category:'',
  product_name:'',
  price:'',
  store:'',
  url:''
}

handleChange = (event) => {
 this.setState({
    [event.target.name]: event.target.value
 })
}

handleSubmit = (event) => {
  event.preventDefault()
  this.props.addLook(this.state)
  this.setState({
    title: "",
    note: "",
    date: "",
    category: "Bikini",
    product_name: "Candys Line Cork Flip Flops",
    price: "",
    store: "",
    url: "",
  });
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Look Title:</label>
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
          />
          <br />
          <label>Notes:</label>
          <input
            type="text"
            placeholder="notes"
            value={this.state.note}
            name="note"
            onChange={this.handleChange}
          />
          <br />
          <label>Date:</label>
          <input
            type="text"
            placeholder="date"
            value={this.state.date}
            name="date"
            onChange={this.handleChange}
          />
          <br />
          {/* <input type='submit'/> */}

          <h4> create new look</h4>
          <label> Category</label>
          <select
            value={this.state.category}
            name="category"
            onChange={this.handleChange}
          >
            <option>Bikini</option>
            <option>CoverUps</option>
            <option>FootWear</option>
          </select>
          <label>Product Name</label>
          <select
            value={this.state.product_name}
            name="product_name"
            onChange={this.handleChange}
          >
            <option>Cheryl Metallic Sliding Triangle Bikini</option>
            <option>Sadie Metallic One Shoulder Swimsuit</option>
            <option>Sadie Metallic One Shoulder Swimsuit</option>
            <option>Sheer Open Front Kimono</option>
            <option>EBW X Vitamin A Shirt Dress</option>
            <option>Santos Naked Sandals</option>
            <option>Candys Line Cork Flip Flops</option>
            <option>Salon Slide Sandals</option>
          </select>
          <label>Price:</label>
          <input
            type="text"
            placeholder="price"
            value={this.state.price}
            name="price"
            onChange={this.handleChange}
          />
          <label>Store:</label>
          <input
            type="text"
            placeholder="store"
            value={this.state.store}
            name="store"
            onChange={this.handleChange}
          />
          <label>Url:</label>
          <input
            type="text"
            placeholder="url"
            value={this.state.url}
            name="url"
            onChange={this.handleChange}
          />
          <input type='submit'/>
        </form>
      </div>
    );
    
  }
}
export default connect(null, {addLook})(LookForm);

//when you dont use a mapstatetoprops you enter null this component does not need access to whats in the redux store its responsible for sending something to backend and store
//directly import file since we have thunk setup


//local state holding form values 