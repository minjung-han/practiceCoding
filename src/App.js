import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      {/* 동일한 컴포넌트라도 이벤트가 각각 적용된다 */}
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  );
}

{/** function App() {
  return (
    <div className="App">
      <Hello/>
      <div className={styles.box}>App</div>
    </div>
  );
}
*/}

export default App;
