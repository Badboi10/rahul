const express = require("express");
const app = express();
const port = 4000;
const db = require("./model/index");
const studentController = require("./controller/studentController")
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({force:false});

app.get("/", studentController.index);

app.post("/register", studentController.createStudent);

app.get("/login", studentController.renderLogin);

app.post("/login", studentController.loginStudent);


 

//starting the server
app.listen(port, () => {
  console.log("Node server started at port 4000");
});

