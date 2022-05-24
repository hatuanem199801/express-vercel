
const mysql = require("serverless-mysql")(
 config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: process.env.PLANETSCALE_DB_HOST,
        user: process.env.PLANETSCALE_DB_USERNAME,
        password: process.env.PLANETSCALE_DB_PASSWORD,
        database: process.env.PLANETSCALE_DB,
        ssl: {}
    }
})

exports.handler = async (event, context) => {
    // Run your query
    let results = await mysql.query('SELECT * FROM Usuario')

    // Run clean up function
    await mysql.end()

    // Return the results
    return results
}
