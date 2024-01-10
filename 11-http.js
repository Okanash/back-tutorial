const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("Here is our short history");
    res.end();
  } else {
    res.write(`<h1>Oops!</h1>
    <p>We can't find the page you requested</p>
    <a href="/" >Back home</a>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
