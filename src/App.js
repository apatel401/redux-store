import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const cart = useSelector(state => state.cart)
  const isLoogedIn = useSelector(state => state.auth.isLoogedIn)
  useEffect(() => {
    fetch('https://redux-45ac4-default-rtdb.firebaseio.com/cartItem.json', {
      method: "PUT",
      body: JSON.stringify(cart)
    })
  
  }, [cart])
  
  return (
    <div className="App">
      {/* <Auth /> */}
      {isLoogedIn ? <Layout /> : <Auth />}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
