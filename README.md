## Todo App
Sample todo app utilizing storm path for user authentication. Built with angular 2, bootstrap
and firebase.

## Feedback about stormpath
Overall, I was able to get up and going with basic auth relatively quick thanks to the
angular and express stormpath sdks. However, I spend a lot of time in figuring out how
extend stormpath-express with custom properties. I did not know how to get Express to
extend the '/me' endpoint to return my own custom firebase token which I need to authenticate
to firebase.

As a workaround, I simply created a new POST endpoint to create the token given a user id and name.
However, it would of been nice to build that from the GET '/me' call itself.

One plaguing issue is that logout is kind of hairy. Mainly due to firebase logout throwing errors
regarding permissions when calling its logout method. See comments in home.component.ts for
more info.

## Build
Run `npm start` to start the application.
Run `npm run dev` to develop the application
User must provide stormpath app keys and application href inside stormpath.yaml
User must provide client firebase app keys and specify them inside firebase-config.ts
User must provide firebase service account and specify them inside service-account.json

## Deployment
Deployed on heroku @ https://todo-stormpath-app.herokuapp.com

Resources Used
https://github.com/stormpath/stormpath-sdk-angular
https://github.com/stormpath/express-stormpath
https://stormpath.com/blog/angular-2-user-authentication
