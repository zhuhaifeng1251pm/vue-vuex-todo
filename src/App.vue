<template>
<div class="app">
<!-- <router-view></router-view> -->
<Home/>
  </div>
</template>
<script>
// import axios from 'axios'
import Home from './components/Home'
export default {
  name:'app',components:{Home},
  mounted(){
    
this.$store.dispatch('getData')
        
    }
 
}
</script>
<style scoped>

</style>
