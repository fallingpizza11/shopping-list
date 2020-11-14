const { Component } = require("react");

export default class ShoppingList extends Component {
  constructor(props) {
    super(props)

    this.updateList = this.updateList.bind(this)
  }

  updateList() {
    let items  = []
    for(let i = 0; i < this.props.list.length; i++) {
      console.log(i);
      items.push(
        <li key={i}>
          <p>{this.props.list[i]}</p>
        </li>
      )
    }
    return items
  }
  
  render() {
    return(
      <div>
        <ul>
          {this.updateList()}
          {console.log('update')}
          {            
            // TODO: find a better way if there is time
            // the updateList function runs every time the parent component updates it's state
            // so this will run every keystroke, since doing so updates the state of the parent
            // which seems really ineffecient 
          }
        </ul>
      </div>
    )
  }
}