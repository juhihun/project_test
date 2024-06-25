<template>
    <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
         <h3>상세화면</h3>
         <div class="row">
            <div class="col-md-12 border p-3">
         <table class="table table-spride table-hover border">
            <thead>
            <tr>
                <th>번호</th>
                <th>작성일</th>
                <th>이름</th>
                <th>제목</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span v-html="board.no"></span></td>
                <td><span v-html="board.title"></span></td>
                <td><span v-html="board.content"></span></td>
                <td><span v-html="board.writer"></span></td>
            </tr>
        </tbody>
            </table>
     </div>
     </div>

     <button @click="putHandler">수정</button>


    </div>

     </template>

<script>
import axios from "axios";
export default { 
  
    data() { 
        return {
            board : {},
         
        }
    },
   
    created() {
      let no =  this.$route.params.no
      console.log('번호는',no)
      axios.get(`/api/board/${no}`)
        .then((result => {
            console.log(result.data);
            this.board = result.data[0]
        }))
    },
    methods(){
      
    }

}
</script>

<style>
</style>