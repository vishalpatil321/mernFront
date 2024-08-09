import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import PrivateRoutes from './PrivateRoutes';
import Container from './components/Container';
import Register from './components/Register';

function App() {
   return(
    <div>
       <Routes>
         <Route element={<PrivateRoutes/>}>
           <Route path='/news' element={<Container/>}></Route>
         </Route>
         <Route path='/' element={<Login/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
       
       </Routes>
    </div>
   )
  
}

export default App;
