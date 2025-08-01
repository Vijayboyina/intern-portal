const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());


app.get('/api/user', (req, res) => {
  res.json({
    name: "Vijay R",
    referralCode: "vijay2025",
    donations: 1500,
    rewards: ["T-shirt", "Certificate"]
  });
});
 
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
