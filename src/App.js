import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import User from "./components/user";
import UserGenerate from "./components/user_generate";
import { UserContext } from "./context/usercontext";

function App() {
  const [image, setImage] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [countFaces, setCountFaces] = useState(0);
  const [user, setUser] = useState(0);
  const [filteredImage, setfilteredImage] = useState([]);

  useEffect(() => {
    fetchApi();
  }, [user]);


  const fetchApi = async () => {
    const res = await axios.get(`https://randomuser.me/api/?results=${user}`);
    setImage(res.data['results']);
    setCountFaces(res.data['results'].length)
    setLoading(false);
  }

  return (
    <UserContext.Provider value={{ image, setImage, filteredImage, setfilteredImage, user, setUser, countFaces, setCountFaces, isLoading, setLoading }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user-generate" element={<UserGenerate />} />
          <Route path="/user/:item" element={<User />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
