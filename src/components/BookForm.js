import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate here

const BookForm = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const bookData = { title, summary, date };

    if (id) {
      await axios.put(`http://localhost:3000/books/${id}`, bookData);
    } else {
      await axios.post('http://localhost:3000/books', bookData);
    }

    navigate('/'); // Redirect to book list using navigate
  };

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/books/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setSummary(response.data.summary);
          setDate(new Date(response.data.date).toISOString().substring(0, 10));
        })
        .catch(error => {
          console.error('Error fetching book:', error);
        });
    }
  }, [id]);

  return (
    <div>
      <h2>{id ? 'Edit Book' : 'Add Book'}</h2>
      {/* ... rest of the form code */}

<form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Summary:
          <textarea value={summary} onChange={e => setSummary(e.target.value)} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default BookForm;
