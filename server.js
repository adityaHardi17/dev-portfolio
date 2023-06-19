const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Menentukan direktori statis untuk serve file build dari React
app.use(express.static(path.join(__dirname, "build")));

// Routing untuk semua request yang masuk ke server
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Memulai server
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
