import axios from "axios";
import "./App.css";
import Footer from "./Components/Footer";
import Head from "./Components/Head";
import Head2 from "./Components/Head2";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Options from "./Components/Options";
import Signup from "./Components/Signup";
import { DropdownItemContextProvider } from "./contexts/DropdownItemContext";
import { LoginContextProvider } from "./contexts/loginContext";
import { UserContextProvider } from "./contexts/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abd from "./Components/Abd";

function App() {
  axios.defaults.baseURL = "http://localhost:4040";
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LoginContextProvider>
                <DropdownItemContextProvider>
                  <Navbar />
                  <UserContextProvider>
                    <Login />
                    <Signup />
                  </UserContextProvider>
                  <Head />
                  <Head2 />
                  <Options />
                  <Footer />
                </DropdownItemContextProvider>
              </LoginContextProvider>
            }
          />
          <Route path="/ahmedabad" element={<Abd />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
