import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import Main from "./pages/Main/Main.js";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/project" component={Project}>
          <Project />
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

