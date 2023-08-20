import axios from "axios";
import "./App.css";
import { DropdownItemContextProvider } from "./contexts/DropdownItemContext";
import { LoginContextProvider } from "./contexts/loginContext";
import { UserContextProvider } from "./contexts/UserContext";
import BrowserRouter from "./utils/BrowserRouter";

function App() {
  axios.defaults.baseURL = "https://zomato-backend-test1.onrender.com/";
  return (
    <>
      <LoginContextProvider>
        <DropdownItemContextProvider>
          <UserContextProvider>
            <BrowserRouter />
          </UserContextProvider>
        </DropdownItemContextProvider>
      </LoginContextProvider>
    </>
  );
}

export default App;
