import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
