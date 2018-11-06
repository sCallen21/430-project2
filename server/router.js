const controllers = require('./controllers');

const router = (app) => {
  app.get('/login', controllers.Account.loginPage);
  app.post('/login', controllers.Account.login);
  app.get('/signup', controllers.Account.signupPage);
  app.post('/signup', controllers.Account.signup);
  app.get('/logout', controllers.Account.logout);
  app.get('/changePassword', controllers.Account.changePWPage);
  app.post('/changePassword', controllers.Account.changePW);
  app.get('/game', controllers.ElderGod.gamePage);
  app.get('/', controllers.Account.loginPage);
};

module.exports = router;