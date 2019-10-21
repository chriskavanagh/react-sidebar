import React, { useState } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Topnav from "./components/Topnav";
import Toolbar from "./components/Toolbar";
import Contact from "./components/Contact";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { Route, Switch } from "react-router-dom";
import Styledmain from "./styled/Main";
import "./App.css";
import { Wrapper } from "./styled/Wrapper";

function App() {
  const [sideDrawer, setsideDrawer] = useState(false);

  const clickHandler = e => {
    console.log(sideDrawer);
    setsideDrawer(!sideDrawer);
  };

  const backdropClickHandler = e => {
    setsideDrawer(false);
  };

  let backdrop;

  if (sideDrawer) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <>
      <Topnav />
      <Toolbar drawerClickHandler={clickHandler} />
      <SideDrawer open={sideDrawer} />
      {backdrop}
      <Wrapper>
        <Styledmain>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </Styledmain>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
