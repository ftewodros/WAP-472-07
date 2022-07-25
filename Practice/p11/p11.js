
const http= require('http')
const fs= require('fs');
const server= require('http').createServer();

server.on('require', (req, res)=> {
    const src= fs.createReadStream('./p11.html');
    src.pipe(res);
});
server.listen(2000);
