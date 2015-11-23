
/**
 * Module dependencies.
 */
var express = require('express'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    errorHandler = require('errorhandler'),
    http = require('http'),
    path = require('path'),
    prismic = require('express-prismic').Prismic,
  configuration = require('./prismic-configuration').Configuration;


var app = express();

// Prismic.io configuration

prismic.init(configuration);


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon("public/images/punch.png"));
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser('1234'));
app.use(session({secret: '1234', saveUninitialized: true, resave: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(errorHandler());

function handleError(err, req, res) {
  if (err.status == 404) {
    res.status(404).send("404 not found");
  } else {
    res.status(500).send("Error 500: " + err.message);
  }
}

// Routes
app.route('/').get(function(req, res){
  res.render('index');
});

app.route('/:uid').get(function(req, res){
  var uid = req.params['uid']
  var p = prismic.withContext(req, res);
  p.getByUID('page', uid, function(err, page) {
    if(err) {
      res.status(500)
        .send("Error 500: " + err.message);
    }

    if(!page) {
      res.status(404)
        .send('Not found');
    }
    else if (page.uid == uid) {
      res.render('page', {
        page: page
      })
    } else res.redirect(("/" + page.uid))
  });
});


app.route('/preview').get(prismic.preview);

var PORT = app.get('port');

app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
