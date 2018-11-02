const { Pool } = require('pg')

const pool = new Pool({
  database: 'd8hqanjf2e1gcp',
  user: 'wqqzaywjffckab',
  password: 'cbdaaa01f0e53e8f95121f5417ef7ff3223ecd2eac70d5c3a88670d9726cc92a',
  host: 'ec2-54-225-110-152.compute-1.amazonaws.com',
  port: 5432,
  ssl: true
	  // database: 'postgres',
      // user: 'postgres',
      // password: 'password',
      // host: 'localhost',
      // port: 5432
})

// heroku pg:psql postgresql-metric-47925 --app pup-thesis-management-t21

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