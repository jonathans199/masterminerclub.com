<template>
  <div id="app"> 
    <router-view/>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,300,400,400i,500,500i,600,700,900');

  @import './assets/css/_main.css';


  body {
    font-family: 'Montserrat', sans-serif;
  }
</style>
  
<script>

import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'


Vue.use(BootstrapVue)

export default {
  created ( ) {
AOS.init()
}
  
}
</script>
