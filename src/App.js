import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Reschedule from './Pages/Reschedule/Reschedule';
import Scriptedit from './Pages/Reschedule/Scriptedit/Scriptedit';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Reschedule />} />
        <Route path="/script-edit" element={<Scriptedit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
