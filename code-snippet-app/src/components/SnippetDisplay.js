import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SnippetDisplay() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/snippets');
        setSnippets(response.data);
      } catch (error) {
        console.error('Error fetching snippets:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Snippet Display</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Language</th>
            <th>Standard Input</th>
            <th>Timestamp</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {snippets.map((snippet, index) => (
            <tr key={index}>
              <td>{snippet.username}</td>
              <td>{snippet.language}</td>
              <td>{snippet.stdin}</td>
              <td>{snippet.timestamp}</td>
              <td>{snippet.code.slice(0, 100)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    backgroundColor: '#f2f2f2',
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left'
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left'
  }
};

export default SnippetDisplay;
