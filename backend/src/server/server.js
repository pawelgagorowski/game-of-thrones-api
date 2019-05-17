import config            from 'config';
import helmet            from 'helmet';
import morgan            from 'morgan';
import express           from 'express';
import bodyParser        from 'body-parser';
import morganBody        from 'morgan-body';
import expressRequestId  from 'express-request-id';
import { log }           from '../utils';

const { env, port, name } = config;
export default class Server {
  apiInstance = undefined;
  constructor() {
    log.info(`Server environment: ${env}`);
    this.initializeApi();
  }

  initializeApi = ()=> {
    this.apiInstance = express();
    this.apiInstance.use(helmet());
    this.apiInstance.use(bodyParser.text({ type: 'text/html', limit: '1mb' }));
    this.apiInstance.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
    this.apiInstance.use(bodyParser.json({ limit: '1mb' }));
    this.apiInstance.use(morgan('combined'));
    this.apiInstance.use(expressRequestId());
    this.apiInstance.use(morgan('dev'));
    morganBody(this.apiInstance);
    log.info('Api setup done');
  };

  addApiRoute = (method, uri, cbs)=> {
    const info = `Added route: [${method}] ${uri}`;

    this.apiInstance[method.toLowerCase()](uri, cbs);
    log.info(info);
  };

  start = ()=> {
    log.info('Starting server...');
    this.apiInstance.listen(port, (err, result)=> {
      if (err) log.error(`Unable to start ${ name } server:`, err);
      else {
        log.info(`${ name } server is listening on ${port}`);
      }
    });
  };
}
