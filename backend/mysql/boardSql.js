
module.exports = {
    boardList:'select * from t_board_board',
    boardCount : 'select count(*) cnt from t_board_board',
    boardInfo:'select * from t_board_board where no =?',
    boardInsert : 'insert into t_board_board set ?',
    boardUpdate : 'UPDATE t_board_board set ? where no = ?', 
}