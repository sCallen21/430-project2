const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.get('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signupPage);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.get('/changePassword', mid.requiresSecure, mid.requiresLogin, controllers.Account.changePWPage);
  app.post('/changePassword', mid.requiresSecure, mid.requiresLogin, controllers.Account.changePW);
  app.get('/game', mid.requiresLogin, controllers.ElderGod.gamePage);
  app.post('/game', mid.requiresLogin, controllers.ElderGod.newGame);
  //app.post('/gameSave', mid.requiresLogin, controllers.ElderGod.save);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;