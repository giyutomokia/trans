-- Insert sample data into snippets table
INSERT INTO snippets (username, language, stdin, code) VALUES 
    ('user1', 'Java', 'input1', 'public class Main { public static void main(String[] args) { System.out.println("Hello, World!"); }'),
    ('user2', 'Python', 'input2', 'print("Hello, World!")'),
    ('user3', 'C++', 'input3', '#include <iostream>\nusing namespace std;\nint main() { cout << "Hello, World!"; return 0; }');
