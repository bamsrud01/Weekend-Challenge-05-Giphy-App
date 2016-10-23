//  Declare file as a router
var router = require('express').Router();

//  Import postgresql
var pg = require('pg');

//  Use 'rho' database
var config = {
  database: 'rho'
}

//  Initialize connection pool
var pool = new pg.Pool(config);

//  GET function - to display saved gifs
router.get('/', function(req, res) {
  pool.connect(function(err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to database:', err);
        res.sendStatus(500);
        return;
      }
      client.query('SELECT * FROM giphys ORDER BY id', function(err, result) {
        if (err) {
          console.log('Error querying database:', err);
          res.sendStatus(500);
          return;
        }
        console.log('Got rows from database:', result.rows);
        res.send(result.rows);
      });
    } finally {
      done();
    }
  });
});

//  POST function - to save a gif
router.post('/', function(req, res) {
  pool.connect(function(err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to database:', err);
        res.sendStatus(500);
        return;
      }
      client.query('INSERT INTO giphys (comment, url) VALUES ($1, $2) RETURNING *', [req.body.comment, req.body.url], function(err, result) {
        if (err) {
          console.log('Error querying database:', err);
          res.sendStatus(500);
          return;
        }
        console.log('Got rows from database:', result.rows);
        res.send(result.rows);
      });
    } finally {
      done();
    }
  });
});

//  PUT function - to update gif
router.put('/', function(req, res) {
  pool.connect(function(err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to database:', err);
        res.sendStatus(500);
        return;
      }
      client.query('UPDATE giphys SET comment=$1, url=$2 WHERE id=$3 RETURNING *', [req.body.comment, req.body.url, req.body.id], function(err, result) {
        if (err) {
          console.log('Error querying database:', err);
          res.sendStatus(500);
          return;
        }
        console.log('Got rows from database:', result.rows);
        res.send(result.rows);
      });
    } finally {
      done();
    }
  });
});

//  DELETE request - to delete gif
router.delete('/:id', function(req, res) {
  var id = req.params.id
  pool.connect(function(err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to database:', err);
        res.sendStatus(500);
        return;
      }
      client.query('DELETE FROM giphys WHERE id=$1', [id], function(err, result) {
        if (err) {
          console.log('Error querying database:', err);
          res.sendStatus(500);
          return;
        }
        res.sendStatus(204);
      });
    } finally {
      done();
    }
  });
});

//  Export file as a router
module.exports = router;
