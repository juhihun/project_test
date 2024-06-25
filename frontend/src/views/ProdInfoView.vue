<template>
    <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
         <h3>상세화면</h3>
         <div class="row">
            <div class="col-md-12 border p-3">
         <table class="table table-spride table-hover border">
            <thead>
            <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>원산지</th>
                <th>제조사</th>
                <th>유통기한</th>
                <th>상세</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope ="col"class ="text-center">{{prodInfo.PROD_NAME }}</td>
                <td scope ="col"class ="text-center">{{prodInfo.PROD_PRICE }}</td>
                <td scope ="col"class ="text-center">{{prodInfo.ORIGIN }}</td>
                <td scope ="col"class ="text-center">{{prodInfo.MAKER }}</td>
                <td scope ="col"class ="text-center">{{prodInfo.EXP_DATE }}</td>
                <td scope ="col"class ="text-center">{{prodInfo.PROD_EXPLAIN }}</td>


          
               
               
            </tr>
        </tbody>
            </table>
     </div>
     </div>

     <a href>상세</a> |
     <a href>리뷰</a> |
     <a href>QnA</a><hr>
     <Review></Review>
     <button @click="goToList">목록</button>


    </div>

     </template>

<script	>
import axios from "axios";
import Review from '@/components/Review.vue'
export	default {
    name: 'ProdInfoView',
    components: {
    Review
    },
 	data ()	{
 	 return {
 	  searchNo:"",
 	  prodInfo: {},
 	 };
 	},
 	created()	{
 	 this.searchNo = this.$route.query.no ;
 	 this.getProdInfo();
 	},
 	methods: {
 	 async getProdInfo()	{
 	  this.prodInfo = (await axios.get(`/api/shop/${this.searchNo}`)).data[0];
 	 },
 	//  getDateFormat(date )	{
 	//   return this .$dateFormat(date );
 	//  },


 	 goToList( ){
 	  this.$router.push({ path:"/shop"});
 	 },
 	},
 	
};
</script	>


<style>
</style>