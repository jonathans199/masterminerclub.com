<template>
  <div>
    <footer class=" footer__template">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img class="footer__template-logo" src="/assets/img/white_logo_horizontal.svg" alt="">
          </div>
          <div class="col-6 d-flex justify-content-center align-items-center">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>LOGIN</li>
              <li>PLANS</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
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
    margin-right: 15px
  }

</style>
