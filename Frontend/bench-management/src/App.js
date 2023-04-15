import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthState from "./components/AuthState";
import ViewEmployee from "./components/ViewEmployee";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <AdminDashboard /> },
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
