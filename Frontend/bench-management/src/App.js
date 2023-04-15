import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AuthState from './components/AuthState';
import ViewEmployee from './components/ViewEmployee';
import { useContext } from 'react';
import AuthContext from './components/AuthContext';
import AdminDashboard from './components/AdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';

function App() {

  const authData = useContext(AuthContext);
  
  const router = createBrowserRouter([
    { path: "/", element: <ManagerDashboard /> },
    { path: "/viewEmployee", element: <ViewEmployee /> },
  ]);

  return (
    <div className="App">
      <AuthState>
        <RouterProvider router={router} />
      </AuthState>
    </div>
  );
}

export default App;
