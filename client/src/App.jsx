import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUsers from "./CreateUsers";
import UpdateUsers from "./UpdateUsers";

const App = () => {
  return (
    <>
      <h1 className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/create" element={<CreateUsers />} />
            <Route path="/update/:id" element={<UpdateUsers />} />
          </Routes>
        </BrowserRouter>
      </h1>
    </>
  );
};

export default App;
