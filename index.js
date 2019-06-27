const finalhandler = require('finalhandler');

const defaultPort = 1234;
const serve = require('serve-static')('public');

require('http').Server((req, res) => {
    serve(req, res, finalhandler(req, res))
  })
  .listen(process.env.PORT || defaultPort);
console.log(`http://localhost:${defaultPort}`);
