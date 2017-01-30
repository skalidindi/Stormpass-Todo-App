Sample todo app utilizing storm path for user authentication. Built with angular 2, bootstrap
and firebase.

Feedback about stormpath
Overall, I was able to use the get up and going with basic auth relatively quick. However, I
spend a lot of time in figuring out how extend stormpath-express with custom properties. I did
not know how to get Express to extend the '/me' endpoint to return my own custom firebase token.

In the end, I simply created a new endpoint to create and endpoint given a user id and name.
However, it would of been nice to build that from the GET '/me' call itself.

One plaguing issue is that logout is kind of hairy. Mainly due to firebase logout throwing errors
regarding permissions when calling its logout method. See comments in home.component.ts for
more info.

Deployed on heroku @ https://todo-stormpath-app.herokuapp.com

Resources Used
https://github.com/stormpath/stormpath-sdk-angular
https://github.com/stormpath/express-stormpath
