const express = require("express");
const moment = require("moment");
const loadJsonFile = require("load-json-file");
const app = express();

const server = app.listen(3000, () =>
  console.log("Node.js is listening to PORT:" + server.address().port)
);

app.get("/idolJson", (req, res) => res.json({ id: 1, name: "honoka" }));

app.get("/nikoMessage", (req, res) =>
  res.status(200).send(`${req.query.message}にこ★`)
);

app.get("/calculateDate", (req, res) => {
  const startDate = moment(req.query.startDate);
  const endDate = moment(req.query.endDate);
  const diff = endDate.diff(startDate, "days");
  res.status(200).send(`${diff}`);
});

app.get("/idolList", async (req, res) => {
  res.json(await loadJsonFile("foo.json"));
});
