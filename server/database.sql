CREATE DATABASE wofracer;

CREATE TABLE quote(
    quote_id SERIAL PRIMARY KEY,
    quote text NOT NULL,
    high_score integer
);