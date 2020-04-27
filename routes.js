const fs = require("fs");

module.exports = (app) => {
  app.get("/", (req, res) => res.redirect("/api"));
  app.get("/api", (req, res) => {
    const HOST_URL = req.headers.host;

    res.json({
      server: "quangnguyen-server",
      version: 1,
      endpoints: [`${HOST_URL}/api/json/resume`, `${HOST_URL}/api/pdf/resume`],
      license: "Copyright © 2020 Quang Nguyen",
    });
  });

  app.get("/api/json/resume", (req, res) => {
    fs.readFile("public/json/resume.json", (err, data) => {
      if (err) {
        res.send(err);
      }

      res.end(data);
    });
  });

  app.get("/api/pdf/resume", (req, res) => {
    fs.readFile("public/pdf/quangnguyen-resume.pdf", (err, data) => {
      if (err) {
        res.send(err);
      }

      res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Length": data.length,
      });
      res.end(data);
    });
  });
};
