
const commentSql = require('./commentSql')
const boardSql = require('./boardSql')
const prodsql = require('./prodsql')
const noticeSql = require('./noticeSql')

module.exports = {
    ...commentSql,
    ...boardSql,
    ...prodsql,
    ...noticeSql


}
