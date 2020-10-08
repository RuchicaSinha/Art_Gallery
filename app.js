//ART GALLERY file - "app.js"

var bodyParser = require("body-parser"),
  ejs        = require("ejs"),
	mongoose   = require("mongoose"),
	express    = require("express"),
	app        = express();


//APP CONFIG
mongoose.connect("mongodb://localhost:27017/gallery_app", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));


mongoose.connection.once('open', function() {
    console.log('connection has been made');
}).on('error', function(error) {
    console.log('error is: ', error);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//set the view engine to ejs
//app.set('views', './Art Gallery/views');
//app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// ======================
// ROUTES
// ======================


// LANDING PAGE 
app.get('/', function (req, res) {
  res.render('index');
});

// LOGIN PAGE 
app.get('/login', function (req, res) {
  res.render('login');
});

// SIGNUP PAGE 
app.get('/signup', function (req, res) {
  res.render('signup');
});

// ARTISTS GALLERY PAGES 
app.get('/artists/alex_jass', function (req, res) {
  res.render('alex_jass');
});


// SERVER LISTENING ON PORT 3000 
app.listen(3000, function () {
  console.log('Art Gallery Server listening on port 3000!');
});
