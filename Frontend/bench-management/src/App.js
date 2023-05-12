import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Pages/Home/Login.js';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AuthState from './components/Global/AuthState.js';
import ViewEmployee from './components/Pages/ViewEmployee.js';
import 'react-toastify/dist/ReactToastify.css';
import ViewReport from './components/Pages/ViewReport.js';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login/> },
    { path: "/viewEmployee", element: <ViewEmployee /> },
    { path: "/viewReport", element: <ViewReport /> },
  ]);

  return (
    <div className="App">
      <AuthState >
        <RouterProvider router={router} />
      </AuthState>

    </div>
  );
}
export default App;
