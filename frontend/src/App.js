import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/user')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="App">
      <h1>Intern Portal</h1>

      <section className="login">
        <h2>Login (Dummy)</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </section>

      {user && (
        <section className="dashboard">
          <h2>Welcome, {user.name}</h2>
          <p>Referral Code: <b>{user.referralCode}</b></p>
          <p>Total Donations: ₹{user.donations}</p>
          <h3>Rewards:</h3>
          <ul>
            {user.rewards.map((reward, index) => (
              <li key={index}>{reward}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="leaderboard">
        <h2>Leaderboard (Static)</h2>
        <ol>
          <li>Aarav - ₹2000</li>
          <li>Vijay R - ₹1500</li>
          <li>Meera - ₹1200</li>
        </ol>
      </section>
    </div>
  );
}

export default App;
