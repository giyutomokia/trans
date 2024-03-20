-- Create snippets table
CREATE TABLE snippets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    language VARCHAR(50) NOT NULL,
    stdin TEXT NOT NULL,
    code TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
