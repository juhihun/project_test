<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/board">전체조회</router-link> |
    <router-link to="/boardInsert">글 등록</router-link> | 
    <router-link to="/shop">과자 목록</router-link> | 
    <router-link to="/notice">공지사항</router-link> | 



  </nav>
  <router-view/>



</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
