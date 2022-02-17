// import './App.css';
import './index.css';
import Header from './webPage/Header';
import DayList from './webPage/DayList';
import Day from './webPage/Day';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './webPage/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Header 컴포넌트는 고정시킬거기 때문에 Routes 바깥에 둔다 */}
        <Header/>
        <Routes>
            {/* path에 /는 첫 페이지를 의미한다. */}
          <Route path="/" element={<DayList/>}/>
          <Route path="/day/:day" element={<Day/>}/>
          <Route element={<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
