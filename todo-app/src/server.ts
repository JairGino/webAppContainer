import express, { Application, Routerl } from 'express';
import bodyParser from 'body-parser';
import todoRoute from './routes/TodoRoute';
import pool from './dbconfig/dbconfig';

class Server {
	private app;

	constructor() {
		this.app = express();
		this.config();
		this.routerConfig();
		this.dbConnect();
	}

	private config() {
		this.app.use(bodyParser.urlencoded({ extend:true }));
		this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
	}

	private routerConfig() {
		this.app.use('/todo', todoRoute);
	}

	private dbConnect() {
		pool.connect(function (err, client, release) {
			if (err) 
				console.log(`ERROR to connct database: ${err.message}`);
			else
				console.log('Database Connected');
		});
	}

	public start = (port: number) => {
		return new Promise((resolve, reject) => {
			this.app.listen(port, () => {
				resolve(port);
			}).on('error', (err: Object) => reject(err));
		});
	}
}

export default Server;
