<template>
  <nav id="menu">
    <div style="display:flex">
      <div class="col-3 d-flex justify-content-center align-items-center">
        <img class="menu__logo" src="/assets/img/white_logo_horizontal.svg" alt="">
      </div>
      <div class="menu__prices col-5 d-flex justify-content-start align-items-center">
        <span>
          <p>{{prices[0]['symbol']}}USD</p>
          <p>${{parseFloat(prices[0]['price_usd']).toFixed(2)}}</p>
          <p v-bind:class="prices[0]['percent_change_24h'] > 0 ? ('up-green') : ('down-red')" >
            <i v-bind:class="prices[0]['percent_change_24h'] > 0 ? ('fa fa-arrow-up') : ('fa fa-arrow-down')"></i> 
            ({{prices[0]['percent_change_24h']}})
          </p>
        </span>
        <span>
          <p>{{prices[1]['symbol']}}USD</p>
          <p>${{parseFloat(prices[1]['price_usd']).toFixed(2)}}</p>
          <p v-bind:class="prices[1]['percent_change_24h'] > 0 ? ('up-green') : ('down-red')" >
            <i v-bind:class="prices[1]['percent_change_24h'] > 0 ? ('fa fa-arrow-up') : ('fa fa-arrow-down')"></i> 
            ({{prices[1]['percent_change_24h']}})
          </p>
        </span>
        <span>
          <p>{{prices[2]['symbol']}}USD</p>
          <p>${{parseFloat(prices[2]['price_usd']).toFixed(2)}}</p>
          <p v-bind:class="prices[2]['percent_change_24h'] > 0 ? ('up-green') : ('down-red')" >
            <i v-bind:class="prices[2]['percent_change_24h'] > 0 ? ('fa fa-arrow-up') : ('fa fa-arrow-down')"></i> 
            ({{prices[2]['percent_change_24h']}})
          </p>
        </span>
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center  menu__link">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="list-inline" >
          <b-nav-item class="list-inline-item menu__link-item-1">
            REGISTER
          </b-nav-item>
          <b-nav-item class="list-inline-item menu__link-item-2">
            SIGN IN
          </b-nav-item>
          <b-nav-item-dropdown right no-flip no-caret class="list-inline-item menu__link-item-3">
            <!-- Using button-content slot -->
            <template slot="button-content">
              <i class="fa fa-bars"></i>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> 
      </div>
    </div>
    
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Menu',
  props: {
    msg: String
  },

  data(){
    return {
      prices: [],
      api: "https://api.masterminerclub.biz/api/v1/market_cap"
    }
  },

  mounted(){
    this.pricesCall()
  },

  methods: {
    pricesCall(){
      axios.get(this.api)
      .then(response => {
        this.prices = response.data
      })
      .catch((error) => {
        console.log(error)
      })
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu__link {
    font-size: 12px
  }

  .up-green {
    color: #5EAF5D
  }
  
  .down-red {
    color: #E74C3B
  }

  .menu__link-item-1 {
    padding-left: 30px;
    padding-right: 30px
  }

  .menu__link-item-1:hover {
    border: 1px solid #fff;
    border: 1px solid #3e9fef;
    background-color: #3e9fef;
  }

  .menu__link-item-2{
    border: 1px solid #8a8a8a;
    padding-left: 30px;
    padding-right: 30px
  }
  
  .menu__link-item-2:hover{
    border: 1px solid #3e9fef;
    background-color: #3e9fef;
    color: #fff !important;
    padding-left: 30px;
    padding-right: 30px
  }

  .menu__link-item-1:hover a, .menu__link-item-2:hover a {
    color: #ffffff !important;
  }

  .menu__link-item-1 a:hover, .menu__link-item-2 a:hover {
    color: #ffffff !important;
  }

  .menu__link-item-3{
    padding-left: 30px;
    /* padding-right: 30px */
  }

  .menu__link-item-3 i{
    font-size: 23px
  }

  .list-inline {
    display: inline;
  }

  .list-inline i {
    color: #fff !important;
  }

  .list-inline a {
    color: #8a8a8a ;
  }

  .menu__prices span{
    border-left: 1px solid #8a8a8a;
    padding: 10px 40px;
    font-size: 11px
  }

  .menu__prices p {
    margin-bottom: 0px !important
  }

  #menu {
    color: #8a8a8a ;
    border-bottom: 1px solid #8a8a8a
  }

  .menu__logo {
    max-width: 400px;
    width: 100%
  }
</style>
