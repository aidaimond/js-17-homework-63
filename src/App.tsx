import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contacts from "./containers/Contacts/Contacts";
import About from "./containers/About/About";
import Home from "./containers/Home/Home";
import Add from "./containers/Add/Add";
import PostAll from "./containers/PostAll/PostAll";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path={"/"} element={(
            <Home/>
          )}/>
          <Route path={"/posts"} element={(
            <Home/>
          )}/>
          <Route path={"/posts/:id"} element={(
            <PostAll/>
          )}/>
          <Route path="/new-post" element={(
            <Add/>
          )}/>
          <Route path="/about" element={(
            <About/>
          )}/>
          <Route path="/contacts" element={(
            <Contacts/>
          )}/>
          <Route path="*" element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
