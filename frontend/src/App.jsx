import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Write from "./pages/Write";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Member from "./pages/Member";
import Story from "./pages/Story";
import BannerMember from "./components/BannerMember";
import Hero from "./components/Hero";
import FooterComponent from './components/FooterComponent';
import Home from "./SecondPages/Home";

const App = () => {
  const location = useLocation();

  // Check if the current path is /story
  const isStoryPage = location.pathname === '/story';
  const isHomePage = location.pathname === '/';
  return (
    <>
      {(isHomePage)  && <Header />}
      {(isHomePage) && <BannerMember />}
      {(isHomePage)  && <Hero />}
      <Routes>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route exact path="/story" element={<Story />}></Route>
        <Route path="/member" element={<Member />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes>
      {isHomePage && <FooterComponent />}
    </>
  );
};

export default App;
