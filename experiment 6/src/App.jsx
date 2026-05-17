import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  // 🔹 Fetch API Users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // 🔹 Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
    };

    // Add new user to list
    setUsers([...users, newUser]);

    setSuccess("Registration Successful!");
    setError("");

    // Clear form
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        {/* Error Message */}
        {error && <p className="error">{error}</p>}

        {/* Success Message */}
        {success && <p className="success">{success}</p>}

        {/* Registered Users Box */}
        <div className="users-box">
          <h3>Registered Users</h3>

          {users.slice(0, 5).map((user) => (
            <p key={user.id}>
              • {user.name} - {user.email}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;