import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from '../pages/home.jsx';
import AimuNavira from '../pages/aimunavira.jsx';
import AimuTikan5 from '../pages/aimutikan5.jsx';
import AboutUs from '../pages/aboutus.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        {routes.map((route, index) => (
          <Route key={index} element={<route.component />} path={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

const routes = [
  { path: '/home', component: Home },
  { path: '/aimu-navira', component: AimuNavira },
  { path: '/aimu-tikan', component: AimuTikan5 },
  { path: '/about-us', component: AboutUs }
];

export default App;