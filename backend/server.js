// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./config/db");


// // Import routes
// const authRoutes = require("./routes/authRoutes");
// const sessionRoutes = require("./routes/sessionRoutes");   // 👈 add this
// const questionRoutes = require("./routes/questionRoutes"); // 👈 add this

// // Import controllers/middleware
// const { protect } = require("./middlewares/authMiddleware"); // 👈 add this
// const app = express();

// // Middleware to  handle cors
// app.use(
//     cors({ 
//         origin: "*",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type", "Authorization"],
//     })
// );

// connectDB()

// // Middleware
// app.use(express.json());

// // routes
// app.use("/api/auth", authRoutes);
// app.use("/api/sessions", sessionRoutes);
// app.use("/api/questions", questionRoutes);

// app.post("/api/ai/generate-questions", protect, generateInterviewQuestions);
// app.post("/api/ai/generate-explaination", protect, generateConceptExplaination);

// // Serve uploads folder
// app.use('/uploads', express.static(path.join(__dirname,"uploads"), {}));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on prt ${PORT}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const questionRoutes = require("./routes/questionRoutes");

// Import controllers/middleware
const { protect } = require("./middlewares/authMiddleware");
const { 
  generateInterviewQuestions, 
  generateConceptExplaination 
} = require("./controllers/aiController"); // ✅ FIXED

const app = express();

// Middleware to handle cors
app.use(
  cors({ 
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);

// AI routes
app.post("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.post("/api/ai/generate-explaination", protect, generateConceptExplaination);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
