const { Component } = require("react");

export default class ShoppingList extends Component {
  constructor(props) {
    super(props)

    this.updateList = this.updateList.bind(this)
  }

  // helper function that returns the list to be rendered
  updateList() {
    let items = []
    for (let i = 0; i < this.props.list.length; i++) {
      items.push(
        <li key={i} id={i}>
          <p>{this.props.list[i]}</p>
          <img title="Delete Post" alt="delete" onClick={e => { this.props.onItemDeleted(e) }} src="close.svg"></img>
        </li>
      )
    }
    return items
  }

  render() {
    return (
      <ul id="list-body">
        {this.updateList()}
        {
          // TODO: find a better way if there is time
          // the updateList function runs every time the parent component updates it's state
          // so this will run every keystroke, since doing so updates the state of the parent
          // which seems really ineffecient 
        }
      </ul>
    )
  }
}