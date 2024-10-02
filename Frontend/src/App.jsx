import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTask from './pages/AllTask';
import Importanttask from './pages/Importanttask';
import Completetask from './pages/Completetask';
import Incompletetask from './pages/Incompletetask';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='relative'>
<Router>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<AllTask />} />
          <Route path='/importanttask' element={<Importanttask />} />
          <Route path='/completetask' element={<Completetask />} />
          <Route path='/incompletetask' element={<Incompletetask />} />
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
