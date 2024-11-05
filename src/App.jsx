import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import {
  HomePage,
  NotFound,
  Login,
  Master,
  Register,
  Pricing,
} from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
