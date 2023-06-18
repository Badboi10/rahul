const db = require("../model/index");
const Product = db.products;
const Review = db.reviews;
const bcrypt = require("bcryptjs");

exports.index = async (req, res) => {
  res.render("index");
};

exports.renderLogin = async (req, res) => {
  res.render("login");
};

exports.createStudent = async (req, res) => {
  // console.log(req.body) //calling body
  // const name = req.body.Name;
  // const address = req.body.Address;
  // const email = req.body.Email;
  // const password = req.body.password;

  console.log(req.file);

  const { name, address, email, password, image } = req.body; //calling objects from the body separately
  console.log(name, address, email, password, image );

  db.student.create({
    //inserting data into database
    Name: name,
    Address: address,
    Email: email,
    Password: bcrypt.hashSync(password,2),
    Image: "http://localhost:4000/" + req.file.filename,
  });

  res.redirect("/login");
};

exports.loginStudent = async (req, res) => {
  console.log(req.body);
  const { name, password } = req.body; //calling objects from the body separately
  console.log(name, password);

  const foundStudent = await db.student.findAll({
    where: {
      Name: name,
    },
  });

  if (foundStudent.length==0){
    return res.redirect("/login");
  }


  // console.log(foundStudent[0].Password);
  // console.log(bcrypt.compareSync(password,foundStudent[0].Password));

  if(bcrypt.compareSync(password,foundStudent[0].Password)){
    res.redirect("/home");
  }else{
    res.redirect("/login");
  }
  
};
