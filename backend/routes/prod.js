const express = require('express');
const router = express.Router()
const query = require('../mysql/index');
//목록
router.get("/",	async(req ,	res )	=> {
 	let result =	await query("prodList");
 	res.send(result);
});

//단건조회
router.get("/:no",	async (req , res )	=> {
 	let result =	await query("prodInfo",	req.params.no );
 	res.send(result);
});
//댓글목록
router.get("/",	async(req ,	res )	=> {
	let result =	await query("reviewList");
	res.send(result);
});
//리뷰단건조회
router.get("/:no",	async (req , res )	=> {
	let result =	await query("reviewInfo",	req.params.no );
	res.send(result);
});
module.exports = router ;