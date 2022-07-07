const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let html = fs.createReadStream(path.join(__dirname, 'index.html'));
        html.pipe(res);
    }else if(url === '/image' && method === 'POST'){

        let imagePath = path.join(__dirname, 'img1.jpg');
        let fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        fileStream.pipe(res);
    }
    
}).listen(4050, console.log('Listening at 4050'));