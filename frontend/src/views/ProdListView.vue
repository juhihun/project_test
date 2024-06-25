<template>
    <div class ="container">
 		<table class ="table	table-hover">
 	  	 <thead>
 	      <tr>
			   <th>이미지</th>
			   <th>상품명</th>
 	       <th>가격</th>
 	      </tr>
 	     </thead>
 	     <tbody>
 	   <tr :key ="i" v-for ="(prod, i) in prodList" @click ="goToDetail(prod.PROD_NO)">
 	    <td>{{prod.PROD_NO}}</td	>
 	    <td>{{prod.PROD_NAME }}</td>
 	    <td>{{prod.PROD_PRICE }}</td>

 	    

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
			prodList: [],
        }
    },
    created() {
		this.getProdList();
    },
    methods: {
		async getProdList()	{
 	  	let result =	await axios.get(`/api/shop`);
 	  	this.prodList =	result.data ;
 	 	},
	 	goToDetail(no)	{
 	  	this.$router.push({	path:"/shopinfo",	query: { no:no }	});
 	 	},
    }
}
</script>

<style>
</style>