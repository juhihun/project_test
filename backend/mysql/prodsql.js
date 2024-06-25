module.exports = {
  prodList: `SELECT PROD_NO, PROD_NAME, CATEGORY_CODE, PROD_PRICE,
             PROD_EXPLAIN, MAIN_IMG, DETAIL_IMG, MAKER, ORIGIN, EXP_DATE
             FROM prod`,
  prodInfo: `SELECT PROD_NO, PROD_NAME, CATEGORY_CODE, PROD_PRICE, PROD_EXPLAIN, MAIN_IMG, DETAIL_IMG, MAKER, ORIGIN, EXP_DATE
             FROM prod
             WHERE PROD_NO = ?`,
  reviewList: `SELECT * FROM review where PROD_NO = ?`,

};
