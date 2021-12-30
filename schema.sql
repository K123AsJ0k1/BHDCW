CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	code TEXT NOT NULL,
	active BOOLEAN NOT NULL,
	username TEXT,
	password TEXT,
	role INTEGER,
	date TIMESTAMP,
	last_login TIMESTAMP,
	misc TEXT
);

CREATE TABLE texts (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users,
	previous_text_id INTEGER REFERENCES texts,
	next_text_id INTEGER REFERENCES texts,
	name TEXT,
	content TEXT,
	creation_date TIMESTAMP,
	last_view TIMESTAMP,
	last_mark TIMESTAMP,
	last_edit TIMESTAMP,
	misc TEXT
);