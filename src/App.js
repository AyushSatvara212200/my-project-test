import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Homepage from './components/homepage'
import Mainpage from './components/mainpage'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/my-project-test/" element={<Homepage/>}/>
      <Route exact path="/my-project-test/login" element={<Login/>}/>
      <Route exact path="/my-project-test/signup" element={<Signup/>}/>
      <Route exact path="/my-project-test/mainpage" element={<Mainpage/>}/>
    </Routes>
    </>
  );
}

export default App;
