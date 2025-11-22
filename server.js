const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
res.send("Server is working! 🚀");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

