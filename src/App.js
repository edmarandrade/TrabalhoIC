import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
        <>
          <Home />
          <Outlet />
        </>  
  );
}

export default App;
