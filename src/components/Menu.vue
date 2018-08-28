<template>
  <nav id="menu">
    <!-- overlay Menu -->
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <div class="overlay-content">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <!-- overlay Menu end -->
    <div style="display:flex">
      <div class="col-3 ">
        <router-link to="/">
          <img class="menu__logo" src="/assets/img/logo_masterminer_color.svg" alt="">
        </router-link>
      </div>
      <div class="menu__prices col-5 d-flex justify-content-start align-items-center ">
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
          <p>{{prices[6]['symbol']}}USD</p>
          <p>${{parseFloat(prices[6]['price_usd']).toFixed(2)}}</p>
          <p v-bind:class="prices[6]['percent_change_24h'] > 0 ? ('up-green') : ('down-red')" >
            <i v-bind:class="prices[6]['percent_change_24h'] > 0 ? ('fa fa-arrow-up') : ('fa fa-arrow-down')"></i> 
            ({{prices[6]['percent_change_24h']}})
          </p>
        </span>
      </div>
      <div class="menu__links">
        <div>
          <a class="menu__link-item-1" href="https://app.masterminerclub.biz/#/register">REGISTER</a>
        </div>
        <div>
          <a class="menu__link-item-2" href="https://app.masterminerclub.biz/#/login">SIGN IN</a>
          </div>
        <div class="menu__link-item-3">
          <a class="menu__button" onclick="openNav()"> MENU
            <img src="/assets/img/menu-button.svg" alt=""></a>
        </div>
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
      api: "https://api.masterminerclub.biz/api/v1/market_cap",
      prices: [{},{},{},{},{},{},{},{}]
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
      .catch(() => {
        
      })
      
    }
  }
}

</script>

<style scoped>

  #menu {
    color: #8a8a8a ;
    border-bottom: 1px solid rgba(228,230,233,0.3);
    height: 7.5rem;
    font-size: .8rem;
    
  }

  .menu__links {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
    letter-spacing: 1px;
  }

  .menu__links a {
    color: #8a8a8a;
    cursor: pointer;
    text-decoration: none;
  }

  .up-green {
    color: #5EAF5D
  }
  
  .down-red {
    color: #E74C3B
  }

  .menu__link-item-1 {
    padding: 10px 30px;
    margin-right: 10px;
  }

  .menu__link-item-1:hover {
    color: #e6e6e6;
    border: 1px solid rgba(228,230,233,0.3);
    margin-left: -1px;
  }

  .menu__link-item-2{
    border: 1px solid rgba(228,230,233,0.3);
    padding: 10px 30px;
    /* padding-left: 30px;
    padding-right: 30px */
  }
  
  .menu__link-item-2:hover{
    border: 1px solid #025385;
    background-color: #025385;
    color: #fff !important;

  }

  .menu__link-item-3{
    /* padding-left: 30px; */
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
    border-left: 1px solid rgba(228,230,233,0.2);
    padding: 10px 40px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 400;
  }

  .menu__prices p {
    margin-bottom: 0px !important
  }

  .menu__logo {
    max-width: 400px;
    width: 80%;
    font-size: 1rem;
    cursor: pointer;
    padding: 1.5rem;
  }

  .menu__button {
    padding-left: 2rem;
  }

  .menu__button img {
    width: 1.5rem;
    margin: 0 !important;
  }

  .menu-icon {
    font-size: 2rem;
  }

  .overlay {
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
    color: #f1f1f1;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}



@media (max-width: 1000px){
    .menu__prices {
      display: none !important;
    }
    .menu__logo {
      max-width: 400px;
      width: 200px;
    }

    .menu__link-item-1 {
      display: none;
    }

    .menu__link-item-2 {
      display: none;
    }

    .menu__link-item-3{
      padding-left: 8rem;
    }


  }


</style>
