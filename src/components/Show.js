import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Show = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching book:', error);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      {book ? (
        <div>
          <h2>Book Name:</h2>
          <h4>{book.title}</h4>
          <h2>Summary:</h2>
          <p>{book.summary}</p>
          <h2>Published Date:</h2>
          <p>{new Date(book.date).toLocaleDateString()}</p>

          <div>
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button> {/* Use navigate */}
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Show;