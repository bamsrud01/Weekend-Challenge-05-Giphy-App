CREATE TABLE giphys (
  id SERIAL PRIMARY KEY,
  url varchar(80) NOT NULL,
  comment(160) NOT NULL
);
