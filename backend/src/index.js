import pingRoute      from './routes/ping';
import clanControllers from './controllers/clans'
import SchemaValidator from './middlewares/schemaValidator';
import capitalizeMethod from './middlewares/methods';
import Server    from './server/server';

const validateRequest = SchemaValidator(true);
let server = new Server();

server.addApiRoute('GET', '/api/v1/ping', pingRoute);
server.addApiRoute('GET', '/api/v1/clans', clanControllers.list);
server.addApiRoute('GET', '/api/v1/clans/:clan/members', capitalizeMethod, clanControllers.listMembers);
server.addApiRoute('POST', '/api/v1/clans', validateRequest, capitalizeMethod, clanControllers.create);
server.addApiRoute('POST', '/api/v1/clans/:clan/members', validateRequest, capitalizeMethod, clanControllers.createMember);
server.addApiRoute('DELETE', '/api/v1/clans/:name', capitalizeMethod, clanControllers.destroyClan);
server.addApiRoute('DELETE', '/api/v1/clans/:clan/members/:name', capitalizeMethod, clanControllers.destroyMember);

server.start();
