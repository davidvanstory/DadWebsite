const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/website.js') {
        fs.readFile('website.js', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading website.js');
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    } else if (req.url.match(/\.(jpg|jpeg|png|gif)$/)) {
        const imagePath = path.join(__dirname, req.url);
        const imageStream = fs.createReadStream(imagePath);
        
        imageStream.on('error', function() {
            res.writeHead(404);
            res.end('Image not found!');
        });

        const ext = path.extname(req.url).slice(1);
        res.writeHead(200, { 'Content-Type': `image/${ext}` });
        imageStream.pipe(res);
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});