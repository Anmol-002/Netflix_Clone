import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/LoginScreen";
import { auth } from "./Firebase";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import Player from "./screens/Player";
import { CartProvider } from "./Components/ContextReducer";
import MyList from "./screens/MyList";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <CartProvider>
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <Routes>
              <Route exact path="/profile" element={<ProfileScreen />} />
              <Route exact path="/" element={<HomeScreen />} />
              <Route exact path="/trailer" element={<Player />} />
              <Route exact path="/list" element={<MyList />} />
            </Routes>
          )}
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
