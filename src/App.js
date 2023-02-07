import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import User from "./components/user";
import UserDetails from "./components/user_details";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/user/:item" element={<User />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
