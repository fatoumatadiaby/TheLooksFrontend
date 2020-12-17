import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions/addProduct";
import { StyledButton, Label, StyledInput, StyledForm, H1 } from "./FormComponents";

class ProductForm extends React.Component {
  state = {
    category: "Bikini",
    product_name: "Candys Line Cork Flip Flops",
    store: "",
    url: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProduct(this.state, this.props.look.id);
    this.setState({
      category: "",
      product_name: "",  
      store: "",
      url: "",
    });
  };

  render() {
    return (
      <div>
      
          <StyledForm onSubmit={this.handleSubmit}>
              <br></br>
              <H1> create new look</H1>
              <br></br>
              <Label> Category</Label>
              <select
                value={this.state.category}
                name="category"
                onChange={this.handleChange}
              >
                <option>Bikini</option>
                <option>CoverUps</option>
                <option>FootWear</option>
              </select>
              <br></br>
              <Label>Product Name</Label>
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
              <br></br>
              <Label>Store:</Label>
              <StyledInput
                type="text"
                placeholder="store"
                value={this.state.store}
                name="store"
                onChange={this.handleChange}
              />
              <Label>Website Url:</Label>
              <StyledInput
                type="text"
                placeholder="url"
                value={this.state.url}
                name="url"
                onChange={this.handleChange}
              />
              <StyledButton> submit</StyledButton>
            
          </StyledForm>
 
      </div>
    );
  }
}
export default connect(null, { addProduct })(ProductForm);