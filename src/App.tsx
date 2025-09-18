import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateGift from './components/CreateGift';
import GiftPage from './components/GiftPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<CreateGift />} />
          <Route path="/gift" element={<GiftPage />} />
        </Routes>
        
        {/* Developer Credit */}
        <footer className="fixed bottom-0 left-0 right-0 p-4 text-center">
          <div className="backdrop-blur-sm bg-white/10 rounded-full px-4 py-2 inline-block">
            <p className="text-sm font-medium text-white/80">
              Crafted with ❤️ by <span className="font-bold text-white">LIJIN M</span>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;