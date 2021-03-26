import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Movies from './components/movies';
import Counters from './components/counters'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="container">
        <Counters/>
      </main>
    </div>
  );
}

export default App;
