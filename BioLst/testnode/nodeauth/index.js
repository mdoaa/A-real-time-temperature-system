/*let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./db.config');
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)
const bookRoute = require('./routes/auth');
const sensor = require('./models/sensor');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Static directory path
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')));


// API root
app.use('/api', bookRoute)

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
*/
// app.get('/api', async (req, res) => {
//   try {
//     const dataWithTimestamp = await sensor.userSchema; // Assuming Mongoose model

//     // Add timestamp to each item
//     dataWithTimestamp.forEach(item => {
//       item.retrievalTime = new Date();
//     });

//     res.json({ data: dataWithTimestamp });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const mongoDb = require('./db.config');
const nodemailer = require('nodemailer');
const sensor = require('./models/sensor');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    console.log('Database successfully connected');
  },
  (error) => {
    console.log('Database error: ' + error);
  }
);

const bookRoute = require('./routes/auth');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Static directory path
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')));

// API root
app.use('/api', bookRoute);

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Base Route
app.get('/', (req, res) => {
  res.send('invalid endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rrahmeed21@gmail.com',
    pass: 'rwnz yntx snvu lbud'
  },
});

async function checkTemperatureAndSendEmail() {
  try {
    const latestTemperature = await sensor.findOne().sort({ _id: -1 }).limit(1);
const tempval=parseInt(latestTemperature.temperature);
    if (latestTemperature && latestTemperature.temperature > 20) {
      const mailOptions = {
        from: 'rrahmeed21@gmail.com',
        to: 'doaamohamed769@gmail.com',
        subject: 'High Temperature Alert',
        text: `Temperature is above 20 degrees: ${tempval}°C`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    } else {
      console.log('Temperature is not above 20 degrees. No email sent.');
    }
  } catch (error) {
    console.error('Error checking temperature:', error);
  }
}

setInterval(checkTemperatureAndSendEmail, 30000);