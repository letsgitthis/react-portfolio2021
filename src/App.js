import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./Components/NavTabs/NavTabs";
import Footer from "./Components/Footer";
import Main from "./Components/pages/Main/index";
import Projects from "./Components/pages/Projects/Projects";
import Contact from "./Components/pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <NavTabs />
        <Switch>
        <Route path="/" component={Main}>
          <Main />
        </Route>
        <Route path="/project" component={Projects}>
          <Projects />
        </Route>
        <Route path="/contact" component={Contact}>
          <Contact />
        </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

