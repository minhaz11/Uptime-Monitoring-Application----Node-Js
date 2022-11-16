const url = require('url');
const {StringDeconder} = require('string_decoder');

const handle = {};

handle.handleRequest = (req,res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
 
    const decoder = new StringDeconder('utf-8');
    let realData = '';
    req.on('data',(buffer) => {
         realData += decoder.write(buffer);
     })
     req.on('end',() => {
         realData += decoder.end();
         console.log(realData);
         res.end('Hello World');
     })
 }