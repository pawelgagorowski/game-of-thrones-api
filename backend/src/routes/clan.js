const clanConstrollers = require('../controllers/clans')
const SchemaValidator = require('../middlewares/schemaValidator');
const validateRequest = SchemaValidator(true);
const capitalizeMethod = require('../middlewares/methods');

module.exports = (app) => {
  app.get('/api/v1', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/v1/clans/:clan/members', capitalizeMethod, clanConstrollers.listMembers);
  app.get('/api/v1/clans', clanConstrollers.list);
  app.post('/api/v1/clans', validateRequest, capitalizeMethod, clanConstrollers.create);
  app.post('/api/v1/clans/:clan/members', validateRequest, capitalizeMethod, clanConstrollers.createMember);
  app.delete('/api/v1/clans/:name', capitalizeMethod, clanConstrollers.destroyClan);
  app.delete('/api/v1/clans/:clan/members/:name', capitalizeMethod, clanConstrollers.destroyMember);


  app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
};
