// React and routing
import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'

// Components
import NotFound from "./components/notFound";
import Movies from './components/movies';
import Customers from './components/customers'
import Rentals from './components/rentals'
import Navbar from './components/common/navbar'
import MovieDetails from './components/movieDetails'
import LoginForm from './components/loginForm';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

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
          // totalCounters = {this.state.counters.filter(c => c.value > 0).length}
          brand={'Vidly'}
          links={['Movies','Customers','Rentals', 'Login']}
        />


        <div className="container">
            <Switch>
              <Route path="/login" component={LoginForm}/>
              <Route path="/movies/:id" component={MovieDetails}/>
              <Route path="/customers" component={Customers}/>
              <Route path="/rentals" component={Rentals}/>
              <Route path="/not-found" component={NotFound}/>
              <Route path="/movies" render={(props) => <Movies tableType='bs' {...props}/>}/>
              <Redirect from='/' exact to="/movies"/>
              <Redirect to="/not-found"/>
            </Switch>

          {/* <Movies
            tableType='bs'
          /> */}
          {/* <Counters
            counters={this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement}

            onDelete = {this.handleDelete}
          /> */}
        </div>

      </div>
    );
  }

}

export default App;
