import { Pool } from 'pg';

const poolConfig = {
	max: 20,
	connectionString: 'postgres://dbuser:secret@postgres:5432/todo-db',
	idleTimeoutMillis: 30000,
};

export default new Pool (poolConfig)
