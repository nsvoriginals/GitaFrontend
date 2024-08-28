import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // Main application component
import Quote from './pages/Quote'; // Quote page component

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/quote" element={<Quote />} />
        </Routes>
    </BrowserRouter>
);
