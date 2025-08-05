import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;