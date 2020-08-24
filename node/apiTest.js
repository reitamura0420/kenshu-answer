const express = require("express");
const fs = require('fs');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(3003, () =>
  console.log("Node.js is listening to PORT:" + server.address().port)
);

app.get("/userList", async (req, res) => {
  res.json(JSON.parse(fs.readFileSync('./user.json', 'utf8')));
});

app.post("/userList", async (req, res) => {
    const userList = JSON.parse(fs.readFileSync('./user.json', 'utf8'));
    const userName = req.body.userName;
    if (!userName) {
        res.json(userList);
        return;
    }
    const isUser = userList.some(user => user.name === userName);
    if(!isUser) {
        userList.push({ "name": userName, "point": 0 });
    }
    fs.writeFileSync('./user.json', JSON.stringify(userList));
    res.json(userList);
});

app.post("/updatePoint", async (req, res) => {
    const userList = JSON.parse(fs.readFileSync('./user.json', 'utf8'));
    const userName = req.body.userName;
    if (!userName) {
        res.json(userList);
        return;
    }
    const updatedUserList = userList.map(user => {
        if(user.name === userName) user.point += 1;
        return user;
    } 
    );
    fs.writeFileSync('./user.json', JSON.stringify(updatedUserList));
    res.json(updatedUserList);
});