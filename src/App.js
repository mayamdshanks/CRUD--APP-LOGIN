import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { EditUser } from "./components/edit";
import AllUsers from "./components/AllUsers";
import { AddUser } from "./components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
