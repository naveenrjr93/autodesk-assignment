import { Signup } from "./components/register/Signup";
import Login from "./components/login/Login";
import { Route, Switch, Link } from "react-router-dom";
// import { CreateAccount } from "./components/signup";
import "./styles.css";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";

function App() {
  return (
    <div className="page-container">
      <div className="contents">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/signup" component={RegisterPage} />
        </Switch>
      </div>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-content">
            <p className="footer-body">Your account for everything Autodesk</p>
            <Link to="/" className="footer-link">
              {" "}
              Learn More
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
