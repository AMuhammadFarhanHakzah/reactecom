import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/frontend/Home";
import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin/" element={<Navigate replace to="/admin/dashboard" />} />
          <Route path="/" element={<Home/>} />
          <Route path="/admin/" element={<MasterLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
