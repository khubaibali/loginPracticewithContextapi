import Home from './Home'
import {Routes,Route,Router} from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';
import Setting from './Setting';
import Pricing from './Pricing';
import RequiredAuth from './RequireAuth';
import { useContext } from 'react';
import { authContext } from './AuthProvider';
function App() {
  let {auth} = useContext(authContext);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={auth === true ? <Dashboard/> : <Login/>} />
        <Route path='/logout' element={<RequiredAuth><Logout/></RequiredAuth>} />
        <Route path='/dashboard' element={<RequiredAuth><Dashboard/></RequiredAuth>} />
        <Route path='/setting' element={<RequiredAuth><Setting/></RequiredAuth>} />  
        <Route path='/pricing' element={<RequiredAuth><Pricing/></RequiredAuth>} />
        <Route path='*' element={<Home/>} />
      </Routes>  
    </div>
  );
}

export default App;
