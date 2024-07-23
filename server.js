const express = require('express');
const crypto = require('crypto');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to generate HMAC hash
app.get('/generate-hash', (req, res) => {
    const customerId = 'cus_QVBhnykr03RYfs';
    const appId = 'vupg9mh6t';
    const secretKey = 'test_4yhYBA2C5kTMLYLX2Hn4j64xSKIExR1k';

    const data = `${customerId}`;
    const authHash = crypto.createHmac('sha256', secretKey).update(data).digest('hex');

    res.send({ authHash });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
