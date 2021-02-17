import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./Components/NavTabs/NavTabs";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/pages/Main/Main";
import Projects from "./Components/pages/Projects/Projects";
import Contact from "./Components/pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavTabs />
        <Switch>
        <Route path="/project" component={Projects}>
          <Projects />
        </Route>
        <Route path="/contact" component={Contact}>
          <Contact />
        </Route>
        <Route path="/" component={Main}>
          <Main />
        </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

