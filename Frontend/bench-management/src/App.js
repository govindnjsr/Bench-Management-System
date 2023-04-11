//import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Manager from './components/Manager';
import Rendering from './components/Rendering_Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
      {/* <Login/> */}
      <Rendering/>
      {/* <Manager/> */}
    </div>
  );
}

export default App;
