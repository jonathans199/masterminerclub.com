<template>
  <div>
    <footer class="footer__template">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <img class="footer__template-logo" src="/assets/img/logo_masterminer_color.svg" alt="">
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <ul>
              <li><a class="footer__template-link" @click="scroll('#first-section')">HOME</a></li>
              <li><a class="footer__template-link" @click="scroll('.second__section')">ABOUT</a></li>
              <li><a class="footer__template-link" target="_blank" href="https://app.masterminerclub.biz/#/login" >LOGIN</a></li>
              <li><a class="footer__template-link" target="_blank" href="https://app.masterminerclub.biz/#/register" >REGISTER</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import helper from '@/helpers/functions'

export default {
  methods: {
    scroll(id){
      helper.goToByScroll(id)
    }
  }
}
</script>

<style>
  .footer__template, .row {
    flex-direction: row;
  }

  @media (max-width: 1000px){
    .footer__template, .row {
      flex-direction: column;
      text-align: center;
      padding-bottom: 20px
    }
  }
      
  .footer__template-link {
    color: white !important;
    cursor: pointer;
  }

  .footer__template-logo {
    width: 200px
  }

  .footer__template {
    color: white;
    background-color: black
  }

  .footer__template ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* background-color: #333333; */
  }

  .footer__template li {
    display:inline;
    margin-right: 15px;
    color:#218ffa;
    font-size: small;
    letter-spacing: 2px;
    font-weight: 100;
  }

  img {
    margin: 20px;
  }

</style>
