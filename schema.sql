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