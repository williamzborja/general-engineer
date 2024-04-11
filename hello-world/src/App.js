import './App.css';
import PokeAPIFetcher from './components/PokeAPIFetcher';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>React.</p>
        <PokeAPIFetcher />
      </header>
    </div>
  );
}

export default App;
