// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change 'Switch' to 'Routes'
import SubmissionForm from './SubmissionForm';
import SnippetDisplay from './SnippetDisplay';

function App() {
  return (
    <Router>
      <Routes> {/* Change 'Switch' to 'Routes' */}
        <Route path="/" element={<SubmissionForm />} /> {/* Use 'element' prop */}
        <Route path="/snippets" element={<SnippetDisplay />} /> {/* Use 'element' prop */}
      </Routes> {/* Change 'Switch' to 'Routes' */}
    </Router>
  );
}

export default App;
