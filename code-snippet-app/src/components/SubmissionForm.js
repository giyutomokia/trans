import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function SubmissionForm() {
  const [formData, setFormData] = useState({
    username: '',
    language: '',
    stdin: '',
    code: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/submit', formData);
      alert('Snippet submitted successfully');
      setFormData({
        username: '',
        language: '',
        stdin: '',
        code: ''
      });
    } catch (error) {
      console.error('Error submitting snippet:', error);
      alert('Failed to submit snippet');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Submission Form</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          style={styles.input}
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
          placeholder="Language"
          required
        />
        <input
          style={styles.input}
          type="text"
          name="stdin"
          value={formData.stdin}
          onChange={handleChange}
          placeholder="Standard Input"
          required
        />
        <textarea
          style={styles.textarea}
          name="code"
          value={formData.code}
          onChange={handleChange}
          placeholder="Source Code"
          required
        />
        <button style={styles.button} type="submit">Submit</button>
      </form>
      <Link to="/snippets" style={styles.linkButton}>View Submitted Snippets</Link>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  textarea: {
    width: '100%',
    height: '150px',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }
};

export default SubmissionForm;
