const models = require('../models');
const ElderGod = models.ElderGod;

const gamePage = (req, res) => {
  ElderGod.ElderGodModel.findByOwner(req.session.account._id, (err, docs) => {
    if(err){
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }
    
    return res.render('app', { csrfToken: req.csrfToken(), gods: docs });
  });
};

const newGame = (req, res) => {
  if(!req.body.name){
    return res.status(400).json({ error: 'A name is required' });
  }
  const initData = {
    name: req.body.name,
    owner: req.session.account._id,
  };
  
  const newGod = new ElderGod.ElderGodModel(initData);
  
  const elderGodPromise = newGod.save();
  
  elderGodPromise.then(() => res.json({ redirect: '/game' }));
  
  elderGodPromise.catch((err) => {
    console.log(err);
    return res.status(400).json({ error: 'an error occured'});
  });
  
  return elderGodPromise;
};

module.exports.gamePage = gamePage;
module.exports.newGame = newGame;