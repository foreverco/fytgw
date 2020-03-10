<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    background: url('./assets/img/bg.png');
                -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
  }
  .container-fluid {
    padding:0;
    margin: 0;
}
   /*修改滚动条样式*/
p::-webkit-scrollbar{
    width:10px;
    height:10px;
    /**/
  }
  p::-webkit-scrollbar-track{
    background: rgb(239, 239, 239);
    border-radius:2px;
  }
  p::-webkit-scrollbar-thumb{
    background: #bfbfbf;
    border-radius:10px;
  }
  p::-webkit-scrollbar-thumb:hover{
    background: #333;
  }
  p::-webkit-scrollbar-corner{
    background: #179a16;
  }
</style>
