const { Component } = require("react");

export default class ShoppingList extends Component {
  
  render() {
    return(
      <div>
        <h1>{this.props.list}</h1>
      </div>
    )
  }
}