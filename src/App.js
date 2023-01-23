import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Homepage from './components/homepage'
import Mainpage from './components/mainpage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes basename="/my-project-test">
        <Route exact path="/my-project-test/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
