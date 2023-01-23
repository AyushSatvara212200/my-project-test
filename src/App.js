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
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/mainpage" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
