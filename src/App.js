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
   * 
   * @param {Event} event submit event from form
   */
  addToList(event) {
    event.preventDefault()
    this.setState(oldState => ({
      list: [...oldState.list, this.state.input]
    }))
    this.setState({input: ''})
  }

  /**
   * adds an element to the array
   * @param {Event} event change event from the textarea
   */
  syncTextArea(event) {
    this.setState({ input: event.target.value})
    // console.log(this.state.input);
  }

  componentDidUpdate() {
    console.log(this.state.list)
    console.log('the input is: ' + this.state.input);

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
