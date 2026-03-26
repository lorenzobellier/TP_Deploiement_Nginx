const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint - server info
app.get('/api/status', (req, res) => {
  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: Math.floor(os.uptime()),
    memory: {
      total: Math.round(os.totalmem() / 1024 / 1024),
      free: Math.round(os.freemem() / 1024 / 1024)
    },
    cpus: os.cpus().length,
    nodeVersion: process.version,
    timestamp: new Date().toISOString()
  });
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ MDS Dashboard running on http://0.0.0.0:${PORT}`);
});
