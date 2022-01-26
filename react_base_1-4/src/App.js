import logo from './logo.svg';
import './App.css';
import cat from './cat.jpg'
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
          <Counter/>
      </header>
    </div>
  );
}

export default App;
