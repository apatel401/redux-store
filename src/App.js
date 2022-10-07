import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoogedIn = useSelector(state => state.auth.isLoogedIn)
  return (
    <div className="App">
      {/* <Auth /> */}
      {isLoogedIn ? <Layout /> : <Auth />}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
