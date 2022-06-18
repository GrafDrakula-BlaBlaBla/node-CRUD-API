import {createServer} from 'http';
import { parse } from 'url';
import { routes } from './src/routes.js';

const host = 'localhost'
const port = 1100

const server = createServer((req, res) => { // функция requestListener
    
    const url = parse(req.url, true)
    const route = url.path.replace(/^\/+|\/+$/g, "");
    const payload = url.query
    res.setHeader("ContentType","application/json")

    routes(route, req, res)
});
  
server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
});
