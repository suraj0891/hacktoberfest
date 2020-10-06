

console.log(process.env);

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require("./routes/api/api");
const cookieParser = require("cookie-parser");
var mongoose = require('mongoose');

var passport = require('passport');

const config = require("./config.json")[
  process.env.NODE_ENV || "development"
];

const PORT = config.PORT || 8080;


// Initializing the server
const app = express();
app.set('trust proxy', true);
app.disable("etag");


app.use(helmet({
  frameguard: false,
  hsts: false,
  noSniff: false,
  xssFilter: false
}));

mongoose.connect('mongodb://localhost:27017/nepal', { useNewUrlParser: true }, (err) => {
  if(!err){
    console.log('MongoDB connection succeeded.');
  }else{
    console.log('Error in DB Connection : ' + JSON.stringify(err, undefined, 2));
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(upload.array());
app.use(logger);

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// allow cors only in local environment.
if (process.env.NODE_ENV === 'local') {
  app.use(cors(corsOptions));
}


// Routing
app.use("/api", api);
app.use(express.static(__dirname + "/../build", {}));
app.use("/*", express.static(__dirname + "/../build"));

// Start the server
var server = app.listen(PORT, console.log(`App listening on port: ${PORT}`));
server.setTimeout(6 * 60* 1000);
