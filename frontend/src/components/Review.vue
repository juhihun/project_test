<template>
    <div class ="container">
 		<table class ="table	table-hover">
 	  	 <thead>
 	      <tr>
			<th>NO.</th>
			<th>CONTENT</th>
 	    	<th>NAME</th>
 	      	<th>DATE</th>
 	      </tr>
 	     </thead>
 	     <tbody>
 	   <tr :key ="i" v-for ="(review, i) in reviewList" @click ="goToDetail(review.REVIEW_NO)">
 	    <td>{{review.REVIEW_NO}}</td>
 	    <td>{{review.USER_ID }}</td>
 	    <td>{{review.REVIEW_CONTENT }}</td>
 	    <td>{{review.CREATE_DATE }}</td>


 	    

 	   </tr>
 	  </tbody>
 	 </table>
 	</div>
</template>

<script>
import axios from "axios";
export default { 
    data() { 
        return {
			reviewList: [],
        }
    },
    created() {
		this.getReviewList();
    },
    methods: {
		async getReviewList()	{
 	  	// let result =	await axios.get(`/api/shopInfo`);
 	  	// this.reviewList =	result.data ;
 	 	},
	 	// goToDetail(no)	{
 	  	// this.$router.push({	path:"/reviewinfo",	query: {no:no }	});
 	 	// },
    }
}
</script>

<style>
</style>