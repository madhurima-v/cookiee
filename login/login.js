import { logActivity } from '../log.js';

import { checkEmail,setDB } from '../database.js';

import { setUserTOSessionIdMap } from '../session.js';

import bcrypt from "bcrypt"

import { v4 as uuidv4 } from 'uuid';

var client = setDB()


async function loginGet (req, res) {
    logActivity('get','login')
    res.render('login.ejs', {
      'status': ''
    })
  }
  
async function loginPost (req, res) {

    var data = await checkEmail(req.body.email, client)
  
    if (data.rowCount > 0) {
  
      bcrypt.compare(req.body.password, data.rows[0].password, async function (err, result) {
        if (result) {
          console.log("User login successfully")
          var sessionId = uuidv4();
          var sessionIdMap = await setUserTOSessionIdMap(sessionId,data)
          res.cookie('MyWebsite', sessionId, {maxAge: 1*60*1000 })
          res.redirect('/logout')
        }
        else {
          console.log("Incorrect password")
          res.render('login.ejs', {
            'status': 'Incorrect password'
          })
        }
      });
    }
    else {
      console.log("No user")
      res.render('login.ejs', {
        'status': 'No user'
      })
    }
  }

export { loginGet, loginPost }