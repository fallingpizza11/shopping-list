import { Component } from 'react';
import './App.css';
import ShoppingList from './ShoppingList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      input: '',
    }

    this.syncTextArea = this.syncTextArea.bind(this)
    this.addToList = this.addToList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  /**
   * Trims the users input and sets the state of the list array to a new list
   * with the added list item, if the list item has text in it
   * 
   * @param {Event} event submit event from form
   */
  addToList(event) {
    event.preventDefault()

    let input = this.state.input.trim()
    if (input !== '') {
      this.setState(oldState => ({
        list: [...oldState.list, input]
      }))
    }
    this.setState({ input: '' })
  }

  /**
   * syncs the reactDOM with the real DOM by updating the state of 'input'
   * whenever the user types something into the textarea
   * 
   * @param {Event} event change event from the textarea
   */
  syncTextArea(event) {
    this.setState({ input: event.target.value })
  }

  /**
   * gets the index of the post from a child component when the user
   * clicks on the 'delete' button
   * @param {Event} event 
   */
  deleteItem(event) {
    const postId = event.target.parentElement.id
    let mutatedList = this.state.list.filter(element => this.state.list[postId] !== element)
    this.setState({ list: mutatedList })
  }

  render() {

    return (
      <div className="App">
        <section id="list-head">
          <h1>Shopping List</h1>
          <form onSubmit={this.addToList}
            onKeyDown={
              event => {
                if (event.key === "Enter") {
                  this.addToList(event)
                }
              }
            }>
            <textarea onChange={this.syncTextArea}
              value={this.state.input}>
            </textarea>
            <input id="submit-button" type="submit" value="Add To List" />
          </form>
        </section>

        <ShoppingList onItemDeleted={this.deleteItem} list={this.state.list} />
      </div>
    );
  }


}

export default App;
