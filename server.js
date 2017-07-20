'use strict';

const log = x => console.log(x);

const url = require('url'); 

const http = require ('http');

const fs = require('fs');

const PORT = 8080;

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

// We need a function which handles requests and send response
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {
    case "/":
      displayRoot(urlParts.pathname, req, res);
      break;
    case "/food.html":
      displayFavFood(urlParts.pathname, req, res);
      break;
    case "/movies.html":
      displayFavMovies(urlParts.pathname, req, res);
      break;
    case "/CSS.html":
      displayFavCSS(urlParts.pathname, req, res);
      break;
    default:
      display404(urlParts.pathname, req, res);
  }
}

// When we visit the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
  fs.readFile(__dirname+'/home.html', 'utf-8', (err,data) => {
    
    if (err) {
      return console.log("you done messed up A A Ron");
    } else {
      res.writeHead(200, {"Content-Type":"text/html" });
      res.end(data);
    }
  });
}

// When we visit the "http://localhost:8080/portfolio" path, this function is run.
function displayFavFood(url, req, res) {
  fs.readFile(__dirname+'/food.html', 'utf-8', (err,data) => {
    
    if (err) {
      return console.log("you done messed up A A Ron");
    } else {
      res.writeHead(200, {"Content-Type":"text/html" });
      res.end(data);
    }
  });
}

function displayFavMovies(url, req, res) {
  fs.readFile(__dirname+'/Movies.html', 'utf-8', (err,data) => {
    
    if (err) {
      return console.log("you done messed up A A Ron");
    } else {
      res.writeHead(200, {"Content-Type":"text/html" });
      res.end(data);
    }
  });
}

function displayFavCSS(url, req, res) {
  fs.readFile(__dirname+'/CSS.html', 'utf-8', (err,data) => {
    
    if (err) {
      return console.log("you done messed up A A Ron");
    } else {
      res.writeHead(200, {"Content-Type":"text/html" });
      res.end(data);
    }
  });
}

// When we visit any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}