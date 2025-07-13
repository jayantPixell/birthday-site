import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route to serve HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🎉 Birthday site running at http://localhost:${PORT}`);
});
