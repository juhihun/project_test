<template>
    <div>
        <Header></Header>
        <table class="table table-spride table-hover border">
        <thead>
         <tr>
             <th>no</th><th>제목</th><th>작성자</th><th>작성일자</th><th>댓글 수</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="b in board" @click="boardInfoHandler(b.no)">
            <td>{{b.no}}</td>
            <td>{{b.title}}</td>
            <td>{{b.content}}</td>
            <td>{{b.writer}}</td>
            <td>{{b.create_date}}</td>
           


             </tr>
        </tbody>
        </table>
    <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import axios from "axios";
import Footer from '@/components/Footer.vue';
export default { 
    components: {
    Header, Footer
  },
    data() { 
        return {
            board:[]
        }
    },
    created() {
   
        axios.get('/api/board')
        .then((result) => {
            console.log(result);
            this.board = result.data;
        }).catch((err) => {
            console.log(err);
        })
    },
    methods: {
        boardInfoHandler(no){
                this.$router.push({name:'boardInfo', params:{no}});
            }
        
    }
}
</script>

<style>
</style>