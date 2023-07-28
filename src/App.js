import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { LoginContextProvider } from './contexts/loginContext';

function App() {
  return (
    <>
      <LoginContextProvider>
        <Navbar />
        <Login />
      </LoginContextProvider>

    </>
  );
}

export default App;
