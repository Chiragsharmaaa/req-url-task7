/*

***NODE.js PROGRAM LIFECYCLE.***

node app.js => 
Start Script => 
Parse Code, Register Variables & Functions => 
Event Loop => 
keeps on running as long as there are event listeners registered.

*/




const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Chirag')
    console.log(req.url, req.method, req.headers);
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (url === '/home') {
        res.write('<html>')
        res.write('<head><title>Welcome Home</title></head>')
        res.write('<body><h1>Welcome Home!</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (url == '/about') {
        res.write('<html>')
        res.write('<head><title>Welcome to About Us</title></head>')
        res.write('<body><h1>Welcome to About Us Page!</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (url == '/node') {
        res.write('<html>')
        res.write('<head><title>Welcome to my Node js Project</title></head>')
        res.write('<body><h1>Welcome to my Node.js Project!</h1></body>')
        res.write('</html>')
        return res.end()
    }
})

server.listen(3000)

