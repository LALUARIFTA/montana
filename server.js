const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// API Endpoint to safely expose Supabase credentials to frontend client
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || 'https://uyncdhbzznqzcmhhglng.supabase.co',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5bmNkaGJ6em5xemNtaGhnbG5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMDE0NzYsImV4cCI6MjEwMjg3NzQ3Nn0.55YB2r2aiovuPaBeuKcQ2K0XVoD2XcQ-KjoIrd4MB_w'
  });
});

// Serve static frontend assets from public/ folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🚀 Montana Outdoor Server Running at http://localhost:${PORT}`);
    console.log(`====================================================`);
  });
}

module.exports = app;
