const express = require("express");
const next = require("next");

//Node env 가 production이 아니면 DEv 모드
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/post/:title", (req, res) => {
    //console.log(req);
    const actualpage = "/post";
    const queryParams = { title: req.params.title };
    app.render(req, res, actualpage, queryParams);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server
    .listen(3000, err => {
      if (err) throw err;
      console.log(" > Ready on http://localhost:3000");
    })
    .then(ex => {
      console.log(ex.stack);
      process.exit(1);
    });
});
