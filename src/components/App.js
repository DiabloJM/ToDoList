//import Home from './Home/Home';
import './App.css';
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
//import Todo from './Todo/Todo';
//import Timer from './Pomodoro/Timer';
//import Crypto from './Crypto/Coins'
//import Charthome from './chart/Charthome';
//import Animation from './Animating/Animation';
import Number from './PureComponent/Numbers';

function App() {
  return (
    <div className="App">
      <Header title="Header" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <Content>
        <Number />
      </Content>

      <Footer />
    </div>
  );
}

export default App;
