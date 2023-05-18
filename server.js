const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');
const fileUpload = require('express-fileupload');







// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(4000, () => console.log("Server Running"));
app.use(fileUpload());
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "geo.araya007@gmail.com",
    pass: "iclnhtwavfmdqwzd"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "geo.araya007@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
// To handle the download file request
// Ruta para descargar un archivo

// Ruta para descargar un archivo PDF
app.get('/download', (req, res) => {
  const fileName = req.query.file;
  const filePath = path.join(__dirname, 'pdfs', fileName);

  res.download(filePath, fileName, (err) => {
    if (err) {
      console.log('Error al descargar el archivo:', err);
      res.status(500).send('Error al descargar el archivo.');
    } else {
      console.log('Archivo descargado correctamente.');
    }
  });
});