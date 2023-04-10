//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards_Table from './components/Cards_Table';
import Login from './components/Login';
import NavBar from './components/Navbar';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import AuthState from './components/AuthState';
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
  );
}

export default App;
