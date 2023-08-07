import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Routes and Link
import Home from './components/Home';
import Show from './components/Show';
import BookForm from './components/BookForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>

        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<Show />} />
          <Route path="/add" element={<BookForm />} />
          <Route path="/edit/:id" element={<BookForm />} />
          <Route path="/delete/:id" element={<Show />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;