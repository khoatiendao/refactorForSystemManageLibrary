import mailer from 'nodemailer';
import hbs from 'handlebars';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import jwtToken from '../middlewares/auth/authJwt.js';
import dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transporter = mailer.createTransport({
  host: 'smtp.gmail.com', // SMTP server của gmail
  port: '465', // port của SMTP server
  secure: 'true', // sử dụng SSL/TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // bỏ qua lỗi self-signed certificate
  },
});


const readFileHtml = (path, callback) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
    if (err) {
      callback(err);
      throw err;
    } else {
      callback(null, html);
    }
  });
};

const createMail = {
    send(email, fullName) {
      return new Promise((resolve, reject) => {
        try {
          readFileHtml(
            join(__dirname, '../assets/hbs/mailRegister.hbs'),
            (err, html) => {
              if (err) {
                reject('Error loading templates');
              } else {
                const tokenEmail = jwtToken.generatedTokenMail(email);
                const url = `http://localhost:3000/verify/${tokenEmail}`;
                const template = hbs.compile(html);
                const htmlToSend = template({ url, fullName });
                const mailOptions = {
                  from: process.env.EMAIL_USER,
                  to: email,
                  subject: 'Verify Account',
                  html: htmlToSend,          
                };
  
                transporter.sendMail(mailOptions, (err, info) => {
                  if (err) reject(err);
                  resolve(true);
                });
              }
            }
          );
        } catch (error) {
          console.log(error);
        }
      });
    }
}

export default createMail;
