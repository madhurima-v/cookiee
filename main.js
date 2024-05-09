import express from 'express'

import bodyParser from 'body-parser'

import cookieParser from 'cookie-parser'

import 'dotenv/config'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { registerGet, registerPost } from './register/register.js'
import { loginGet, loginPost } from './login/login.js';
import { logoutGet, logoutPost } from './logout/logout.js';
import { cookieExists } from './middleware/checklogin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()


app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname+'\\public'))

app.use(cookieParser())

app.get('/', cookieExists, function(req,res){
  res.render('index.ejs')
})

app.get('/register', registerGet)

app.post('/register', registerPost)

app.get('/login', loginGet)

app.post('/login', loginPost)

app.get('/logout', cookieExists, logoutGet)

app.post('/logout', logoutPost)

app.listen(3000, function (req, res) {
  console.log("Server started")
}) 