require("dotenv").config(); //load in .env file & its key pairs to process.env

//________________________________________ Express & Session ...

const express = require("express");
const sessions = require("express-session");

const app = express();

app.use(express.static(__dirname));
app.use(express.json());

// create 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//sessions middleware
app.use(sessions({
    secret: process.env.SessionSecret,
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}));

app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

function isAdmin() {
    return (session?.userid === process.env.Admin_ID);
}

let session = {
    sessionID: "",
    userid: "",
    userCart: [],
    cookie: {}
};
  
//________________________________________ Body-Parser ...

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

//________________________________________ MongoDB ...

const { MongoClient } = require("mongodb");
var ObjectId = require("mongodb").ObjectId;
const uri = process.env.Mongo_DB;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

//________________________________________ Multer Middleware & Cloudinary ...

const multer = require("multer");
const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/png||jpeg||jpg$i/)) {
            cb(null, true);
            return;
        }
        cb(new Error("File not supported"), false);
    }
});

const cloudinary = require("cloudinary").v2;
const {Cloudinary} = cloudinary.config ({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.API_KEY_Cloud,
    api_secret: process.env.API_SECRET_Cloud
});

//________________________________________ Encryption ...

const bcrypt = require("bcrypt");
const saltRounds = 10;

//________________________________________ lodash ...

const _ = require("lodash");
const { application } = require("express");

//________________________________________

const port = process.env.PORT || "3000"
app.listen(port, err => {
    if (err)
        throw err
    console.log("Server active on port", port);
});

// _________________________ Admin Section _________________________ //

//________________________________________ Admin DB ...

app.get("/adminDB.html", function(req, res){
    res.sendFile(__dirname  + "/adminDB.html");
});

//________________________________________ New Category ...

app.get("/newCategory.html", function(req, res){
    res.sendFile(__dirname  + "/newCategory.html");
});

//________________________________________ New Art Listing ...

app.get("/newArtListing.html", function(req, res){
    res.sendFile(__dirname  + "/newArtListing.html");
});

//________________________________________ New Digital Artwork ...

app.get("/newDigital.html", function(req, res){
    res.sendFile(__dirname  + "/newDigital.html");
});

//________________________________________ New Small Business ...

app.get("/newSmallBusiness.html", function(req, res){
    res.sendFile(__dirname  + "/newSmallBusiness.html");
});


// _________________________ Accounts Section _________________________ //
    // Relevant modal(s) can be found in header component.
        // signup / login / forgot password / terms & conditions.
        

// _________________________ Sales Section _________________________ //

//________________________________________ Home ...

app.get("/", function(req, res){
    res.sendFile(__dirname  + "/home.html");
});

//________________________________________ Alcohol Inks ...

app.get("/alcohol.html", function(req, res){
    res.sendFile(__dirname  + "/alcohol.html");
});

//________________________________________ Digital Artwork ...

app.get("/digital.html", function(req, res){
    res.sendFile(__dirname  + "/digital.html");
});

//________________________________________ Paintings ...

app.get("/paintings.html", function(req, res){
    res.sendFile(__dirname  + "/paintings.html");
});


// _________________________ Checkout Section _________________________ //

//________________________________________ Wishlist ...

app.get("/wishlist.html", function(req, res){
    res.sendFile(__dirname  + "/wishlist.html");
});

//________________________________________ Cart (w/ checkout modal) ...

app.get("/cart.html", function(req, res){
    res.sendFile(__dirname  + "/cart.html");
});

//________________________________________ Checkout Review ...

app.get("/checkoutReview.html", function(req, res){
    res.sendFile(__dirname  + "/checkoutReview.html");
});

//________________________________________ Order Confirmation ...

app.get("/confirmation.html", function(req, res){
    res.sendFile(__dirname  + "/confirmation.html");
});

// _________________________ Information Section _________________________ //


//________________________________________ About ...

app.get("/about.html", function(req, res){
    res.sendFile(__dirname  + "/about.html");
});

//________________________________________ Contact Me ...

app.get("/contact.html", function(req, res){
    res.sendFile(__dirname  + "/contact.html");
});

//________________________________________ Reviews (new review = modal)...

app.get("/reviews.html", function(req, res){
    res.sendFile(__dirname  + "/reviews.html");
});

//________________________________________ Shipping ...

app.get("/shipping.html", function(req, res){
    res.sendFile(__dirname  + "/shipping.html");
});

//________________________________________ Support Small ...

app.get("/supportSmall.html", function(req, res){
    res.sendFile(__dirname  + "/supportSmall.html");
});