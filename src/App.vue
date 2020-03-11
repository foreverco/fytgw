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
.row {
      padding:0;
    margin: 0;
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
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
