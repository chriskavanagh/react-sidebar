import React, { useState } from "react";
// import { Route, Switch } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer";
import "./App.css";

function App() {
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);

  const clickHandler = e => {
    setsideDrawerOpen(false);
  };

  return (
    <div style={{ height: "100%" }}>
      <Toolbar />
      <SideDrawer />
      <main style={{ marginTop: "64px" }}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
