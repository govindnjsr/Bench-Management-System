//import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards_Table from './components/Cards_Table';
import Login from './components/Login';
import NavBar from './components/Navbar';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import AuthState from './components/AuthState';
=======
import Login from './components/Login';
import Navbar from './components/Navbar';
import Manager from './components/Manager';
import Rendering from './components/Rendering_Admin';

>>>>>>> 3341fee2f0b5112cc87535c8237625ae2d4913da
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Login />}>
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='manager' element={<ManagerDashboard />} />
      </Route>
    )
  );


  return (
<<<<<<< HEAD
    <>

      <div className="App">
        <AuthState>
          <RouterProvider router={router} />
        </AuthState>
        {/* <NavBar/> */}
        {/* <BasicExample/> */}
        {/* <Login /> */}
        {/* <Cards_Table/> */}
      </div>

    </>
=======
    <div className="App">
    {/* <Navbar/> */}
      {/* <Login/> */}
      {/* <Rendering/> */}
      <Manager/>
    </div>
>>>>>>> 3341fee2f0b5112cc87535c8237625ae2d4913da
  );
}

export default App;
