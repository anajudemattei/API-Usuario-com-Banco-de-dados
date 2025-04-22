require("dotenv").config();
const express = require("express");
const cors = require("cors");
const setupSwagger = require('./src/config/swagger');
const path = require("path");

const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app);

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
