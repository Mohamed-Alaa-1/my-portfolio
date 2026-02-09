import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="bg-navy-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-screen text-slate-300">
              <h1 className="text-9xl font-bold text-teal-400">404</h1>
              <p className="text-xl mt-4 mb-8 font-mono">Page Not Found</p>
              <HomeLink />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

const HomeLink = () => (
  <a href="/" className="px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-colors font-mono">
    Go Home
  </a>
);

export default App;