import express from 'express'

import nodemailer from 'nodemailer'

import bodyParser from 'body-parser'

import session from 'express-session'

import cookieParser from 'cookie-parser'

import { uuid } from 'uuidv4'

import bcrypt from "bcrypt"

import pg from 'pg'

import 'dotenv/config'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname+'\\public'))


app.get('/', function (req, res) {
  res.render('index.ejs')
})













app.listen(3000, function (req,res){
    console.log('server started')
})