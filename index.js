const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Hello Unive!",
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
