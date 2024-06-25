<template>
  <div class="about">
    <h3>게시물등록</h3>
         <table>
            <tr>
             
                <td>title <input v-html="board.title"></td>
                <td>content <input v-html="board.content"></td>
                <td>writer <input v-html="board.writer"></td>
            </tr>
          
       
            </table>
            <button @click.prevent="addHandler">등록</button>
  </div>
</template>
<script>
import axios from "axios";
export default { 
    props:{
        boarddata:{type:Object}
    },
    data() { 
        return {
            board : {...this.boarddata}
        }
    },
    created() {
    
    },
    methods: {
        async addHandler(){
            let test = this.board
            console.log(test);
            await axios.post("/api/board",test);
            document.location.href = document.location.href;
            document.location.reload();},//push해야함


   
    }
}
</script>

<style>
</style>
