import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AuthContext, {AuthProvider} from "./context/AuthContext";
import {useContext} from "react";
import MainRouter from "./MainRouter";


function App() {
  return (
    <Router>
      <AuthProvider>
        <MainRouter/>
      </AuthProvider>
    </Router>
  );
}

export default App;
