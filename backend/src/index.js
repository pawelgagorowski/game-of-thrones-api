import pingRoute      from './routes/ping';
import Server    from './server/server';

let server = new Server();

server.addApiRoute('GET', 'api/v1/ping', pingRoute);

server.start();
