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
</style>
