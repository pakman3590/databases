var models = require('../models');

// SHOULD PASS/RECEIVE DATA TO MODELS

const messagePack = (dataRow, target) => {
  let message = {
    'message_id': dataRow[0],
    username: dataRow[1],
    text: dataRow[2],
    roomname: dataRow[3],
    'created_at': dataRow[4]
  };
  target.push(message);
};

module.exports = {
  get: function (req, res) {
    console.log('controller.messages.get');
    // figure out query
    models.messages.getAll((err, results, fields) => {
      if (err) {
        res.status(404).end('this is messed up');
      } else {
        console.log(results);
        let data = [];
        // extract data out of fields
        for (let message of results) {
          messagePack(message, data);
        }
        // send back response array to axios
        res.status(200).end(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};
