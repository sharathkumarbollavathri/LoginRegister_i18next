import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import LogRegTranslation from './components/LogRegTranslation';
import {Routes, Route} from 'react-router-dom' 

function App() {
  
  return (
    <div className="App">
      
      <LogRegTranslation />
      <Routes> 
        <Route path='/' element={<Register/>}/>
          
         <Route path='/loginPage' element={<Login/>}/>
       </Routes>
       
      
    </div>
  );
}

export default App;
