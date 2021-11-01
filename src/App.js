import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Detail from './pages/Movie/Detail'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path='/movie/:id'>
            <Detail />
          </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
