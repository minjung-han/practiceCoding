import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from "./App.module.css";
import Props from './component/Props';
import Event from './component/Event';

function App() {
  return (
    <div className="App">
      <h3>props: properties</h3>
      <Props age={27} />
      <Props age={33} />
      <Props age={12} />
      
    </div>
  );
}

export default App;
