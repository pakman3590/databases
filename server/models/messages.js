const db = require('../db');
const mysql = require('mysql2');


module.exports = {
  getAll: function (callback) {

    // query 2nd param is CB with (err, results, fields)
    db.query('SELECT m.message_id, m.text, m.roomname, m.created_at, u.name FROM messages m INNER JOIN usernames u ON u.id = m.userid;', (err, results) => {
      if (err) {
        callback(new Error('error querying database'));
      } else {
        callback(null, results);
      }
    });

  }, // a function which produces all the messages
  create: function (message, callback) {


    dbconnect();

    // query 2nd param is CB with (err, results, fields)
    dbquery();

    dbend();
  } // a function which can be used to insert a message into the databas'
};
