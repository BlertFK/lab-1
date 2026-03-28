const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const adminRoutes = require("./routes/adminRoutes");        
const buyerRoutes = require("./routes/buyerRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");

const app = express();

// ── Middleware ──────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ──────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/admin", adminRoutes);                    
app.use("/api/buyer", buyerRoutes);
app.use("/api/favorites", favoriteRoutes);

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

const startServer = async () => {
  try {
    await db.query("SELECT 1");
    console.log(`Database connected successfully to "${process.env.DB_NAME}".`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
