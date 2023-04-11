import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AuthState from './components/AuthState';
import AdminDashboard from './components/AdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';

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
    <div className="App">
      <AuthState>
        <RouterProvider router={router} />
      </AuthState>
    </div>
  );
}

export default App;
