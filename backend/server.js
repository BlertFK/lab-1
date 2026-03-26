const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

// ── Middleware ──────────────────────────────
app.use(cors());                        // Allow cross-origin requests (React frontend)
app.use(express.json());                // Parse incoming JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// ── Routes ──────────────────────────────────
app.use("/api/auth", authRoutes);

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "RealEstate API is running." });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

// ── Start Server ────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
