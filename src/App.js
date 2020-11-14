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
    if(input !== '') {
      this.setState(oldState => ({
        list: [...oldState.list, input]
      }))
    }
    this.setState({input: ''})
  }

  /**
   * syncs the reactDOM with the real DOM by updating the state of 'input'
   * whenever the user types something into the textarea
   * 
   * @param {Event} event change event from the textarea
   */
  syncTextArea(event) {
    this.setState({ input: event.target.value})
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App">
        <h1>welcome to city 17</h1>
        <p>you have chosen, or have been chosen</p>
        <form 
        onSubmit={this.addToList} 
        onKeyDown={
          event => {
            if(event.key === "Enter"){
              this.addToList(event)
            }
          }
        }>
          <textarea onChange={this.syncTextArea} value={this.state.input}></textarea>
          <input id="submit-button" type="submit" value="Add"/>
        </form>
        <ShoppingList list={this.state.list}/>
      </div>
    );
  }


}

export default App;
