import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import AuthState from './components/AuthState';
import AdminDashboard from './components/AdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import ViewEmployee from './components/ViewEmployee';

function App() {
  const router = createBrowserRouter(
    [{
       path:'/', element: <Login/>
    },
    {
      path:"/viewEmployee" ,element: <ViewEmployee/>
    }
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
