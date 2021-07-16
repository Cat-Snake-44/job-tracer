const { Pool } = require('pg');

/*

DB Setup

PG_URI is a private variable which is not checked into source control.

To config the app with elephant db:
1 . add a config folder at the project root
2.  add a default.json file in the folder
3.  inside the default.json file add {"PG_URI": "<YOUR_DB_URI>"}

https://www.elephantsql.com/docs/index.html

*/

// Import elephant db connection string.

const PG_URI =
  'postgres://zosmzcvy:pf06g_1gl0nVRd_p5JyqY33RzyON4BsU@batyr.db.elephantsql.com/zosmzcvy';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
