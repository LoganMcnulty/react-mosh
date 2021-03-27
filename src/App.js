import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Movies from './components/movies';
// import Counters from './components/counters'
import Navbar from './components/navbar'

class App extends Component {
    state = { 
      counters: [
          {id:1, value:4},
          {id:2, value:0},
          {id:3, value:0},
          {id:4, value:0},
      ],
  }

  constructor(props) {
    super(props)
    console.log('App - Constructor')
    console.log(this.props)
    // this.state[this.props[key]
  }
  
// this is where we make ajax calls and stuff from server
// Then set state with new data
  componentDidMount(){
    console.log('App - Mounted')
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value=0 
          return c
      })
      this.setState({counters})
  }

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter}
      counters[index].value++;
      this.setState({counters})
  }

  handleDecrement = counter => {
    console.log('handle dec')
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value--;
    this.setState({counters})
}

  handleDelete = counterID =>{
      console.log('event handler called', counterID)
      const counters = this.state.counters.filter(c => c.id !== counterID)
      this.setState({counters})
  }

  render () {
    console.log('App - Rendered')
    return (
      <div className="App">
        <Navbar
          totalCounters = {this.state.counters.filter(c => c.value > 0).length}
        />

        <main className="container">
          <Movies
            tableType='bs'
          />
          {/* <Counters
            counters={this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement}

            onDelete = {this.handleDelete}
          /> */}
        </main>
      </div>
    );
  }

}

export default App;
