import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import Homepage from "./pages/HomePage";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
