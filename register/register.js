import bcrypt from "bcrypt"

import { checkEmail,insertdata,setDB } from "../database.js";

const saltRounds = 10;

var client = setDB()

async function registerGet (req, res) {
    res.render('register.ejs', {
      'status': ''
    })
  }
  
async function registerPost (req, res) {

    var data = await checkEmail(req.body.email, client)

    if (data.rowCount > 0) {
      console.log("User already exist please login")
      res.render('register.ejs', {
        'status': 'user already exist'
      });
    }
    else {
      bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        if (hash) {
          insertdata(req.body.fname, req.body.email, hash, client)
        } else {
          Console.log(err)
        }
      });
  
  
      res.render('thanks.ejs', {
        'name': req.body.fname
      });
    }
  
  }

  export { registerGet, registerPost }