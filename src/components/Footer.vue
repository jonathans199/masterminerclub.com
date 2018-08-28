<template>
  <div>
    <footer class="footer__template">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img class="footer__template-logo" src="/assets/img/logo_masterminer_color.svg" alt="">
          </div>
          <div class="col-6 d-flex justify-content-center align-items-center">
            <ul>
              <li><a class="footer__template-link" @click="scroll('.first__section')">HOME</a></li>
              <li><a class="footer__template-link" @click="scroll('.second__section')">ABOUT</a></li>
              <li><a class="footer__template-link" @click="scroll()">LOGIN</a></li>
              <li><a class="footer__template-link" @click="scroll()">REGISTER</a></li>
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
