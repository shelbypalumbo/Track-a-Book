import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
