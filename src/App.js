import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Toolbar from "./components/Toolbar";
import Contact from "./components/Contact";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { Route, Switch } from "react-router-dom";
import "./App.css";

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
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={clickHandler} />
      <SideDrawer open={sideDrawer} />
      {backdrop}
      <main
        style={{
          marginTop: "120px",
          width: "1200px",
          margin: "120px auto 0 auto",
          display: "grid",
          justifyItems: "center",
          gridTemplateColumns: "2fr 1fr"
        }}
      >
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
