import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { sendCartData } from "./store/CartAction";
import { fetchData } from "./store/CartAction";
let isFirstRender = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isLoogedIn = useSelector((state) => state.auth.isLoogedIn);
  
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);
  
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      {/* <Auth /> */}
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {isLoogedIn ? <Layout /> : <Auth />}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
