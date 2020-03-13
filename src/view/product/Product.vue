<template>
    <div class='container-fluid'>
        <router-view></router-view>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Product',
    data(){
        return{}
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
}
</script>
<style scoped>
  
</style>

