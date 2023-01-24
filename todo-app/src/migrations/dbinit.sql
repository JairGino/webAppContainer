CREATE TABLE todo(
	id INTEGER NOT NULL,
	title TEXT NOT NULL,
	description TEXT NOT NULL,
	is_finished BOOLEAN NOT NULL,
	CONSTRAINT todo_pkey PRIMARY KEY (id)
)
