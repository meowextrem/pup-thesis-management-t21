const { Pool } = require('pg')

const pool = new Pool({
  database: 'dd1ictctqi0cm3',
  user: 'oxhzdvnaspxdtt',
  password: 'd90fcd2cdd91a8ba06b2ac72f68f0cca6e9eb38bde8d4eb08e6d92b504514cb9',
  host: 'ec2-54-227-240-7.compute-1.amazonaws.com',
  port: 5432,
  ssl: true
	  // database: 'postgres',
      // user: 'postgres',
      // password: 'password',
      // host: 'localhost',
      // port: 5432
})

pool.connect().then(function() {
	console.log('connected to database')
}).catch(e => {
	if (e) {
		console.log('cannot connect to database')
	}
})

module.exports = {
	query: (text, callback) => {
		return pool.query(text, callback)
	}
}