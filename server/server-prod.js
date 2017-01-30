'use strict';

const express = require('express');
const path = require('path');
const stormpath = require('express-stormpath');
const bodyParser = require('body-parser');
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

const fbAppRef = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todo-app-83ff7.firebaseio.com"
});

/**
 * Create the Express application.
 */
const app = express();

/**
 * The 'trust proxy' setting is required if you will be deploying your
 * application to Heroku, or any other environment where you will be behind an
 * HTTPS proxy.
 */
app.set('trust proxy', true);

/*
 We need to setup a static file server that can serve the assets for the
 angular application.  We don't need to authenticate those requests, so we
 setup this server before we initialize Stormpath.
 */
app.use('/', express.static(path.join(__dirname, '..', 'dist'), {redirect: false}));

app.use(function (req, res, next) {
  console.log(new Date, req.method, req.url);
  next();
});

/**
 * Now we initialize Stormpath, any middleware that is registered after this
 * point will be protected by Stormpath.
 */
console.log('Initializing Stormpath');

app.use(stormpath.init(app, {
  web: {
    spa: {
      enabled: true,
      view: path.join(__dirname, '..', 'dist', 'index.html')
    },
    me: {
      expand: {
        customData: true
      }
    }
  }
}));

app.post('/token', bodyParser.json(), stormpath.authenticationRequired, function (req, res) {
  const fullName = req.body.fullName;
  const uid = req.body.uid;
  const fbAppAuth = fbAppRef.auth();

  return fbAppAuth.createCustomToken(uid, {
      name: fullName
  }).then(function(token) {
    res.status(200);
    res.json({ token: token, status: 200 });
    res.end();
  });
});

/**
 * Now that our static file server and Stormpath are configured, we let Express
 * know that any other route that hasn't been defined should load the Angular
 * application.  It then becomes the responsibility of the Angular application
 * to define all view routes, and redirect to the home page if the URL is not
 * defined.
 */
app.route('/*')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  });

/**
 * Start the web server.
 */
app.on('stormpath.ready', function () {
  console.log('Stormpath Ready');
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Application running at http://localhost:' + port);
});
