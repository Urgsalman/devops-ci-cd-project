const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <html>
    <head>
      <title>DevOps CI/CD Project</title>
      <style>
        body {
          font-family: Arial;
          background: #0f172a;
          color: white;
          text-align: center;
          padding-top: 100px;
        }
        h1 {
          font-size: 40px;
          color: #38bdf8;
        }
        .box {
          background: #1e293b;
          padding: 30px;
          border-radius: 10px;
          display: inline-block;
        }
      </style>
    </head>

    <body>
      <div class="box">
        <h1>🚀 DevOps CI/CD Project</h1>
        <p>Application deployed with Docker & CI/CD</p>

        <p>✔ GitHub Actions</p>
        <p>✔ Docker Container</p>
        <p>✔ Docker Hub Registry</p>
        <p>✔ Railway Cloud Deployment</p>

        <br>
        <p>Status: <b style="color:lightgreen;">ONLINE</b></p>
      </div>
    </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});