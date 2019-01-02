const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  if (req.url.indexOf('/data?') != -1) {
    const params = req.url.split('?')[1].split('&').reduce((p, c) => {
        c = c.split('=');
        return Object.assign(p, {
            [c[0]]: c[1],
        });
    }, {});
    fs.readFile(params.path, function (err, text) {
        let result = JSON.parse(text);
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        });
        res.write(JSON.stringify(result));
        res.end();
    })
  }
}).listen(8080);