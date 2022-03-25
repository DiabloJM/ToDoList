import Home from './Home/Home';
import './App.css';
import Header from '../shared/layout/Header';

function App() {
  return (
    <div className="App">
      <Header title="Mi App" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <Home />
    </div>
  );
}

export default App;
