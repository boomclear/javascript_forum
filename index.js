const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

let logger = (req, _res, next) => {
  console.log(req.method, req.path);
  next();
}

app.use(logger);

// app.use((_req, _res, next) => {
//   console.log(req.method, req.path);
//   next();
// });

let allPathLeadToHelloWorld = (_req, res, _next) => {
  res.render('index')
}

// app.use((req, res, next) => {
//   if (req.method === 'GET' && req.path === '/') {
//     allPathLeadToHelloWorld(req, res, next);
//   } else {
//     next();
//   }
// });

// app.getOurs = (path, callback) => {
//   if (req.method === 'GET' && req.path === path) {
//     callback(req, res, next);
//   } else {
//     next();
//   }
// }

app.get('/', allPathLeadToHelloWorld);
app.get('/foo', allPathLeadToHelloWorld);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
