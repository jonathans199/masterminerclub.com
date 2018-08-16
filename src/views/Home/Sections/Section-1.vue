<template>
  <div>
    <section id="first-section" class="first__section">
      <Menu/>
      <div class="container d-flex align-items-center" id="first-section-container">
        <div class="row col-12">
          <div class="col-6 text-right first__section-content-1">
            <p>MASTER MINER CLUB</p>
            <h1>UNETE AHORA</h1>
            <div class="first__section-description">
              <p>LA FORMA MAS INNOVADORA Y</p>
              <p>LUCRATIVA DE MINAR</p>
              <p>CRYPTOMONEDA</p>
            </div> 
            <h3>INICIAR <i class="fa fa-arrow-right"></i></h3>
          </div>
          <div class="col-6  d-flex justify-content-center first__section-content-2">
            <div class="col-12">
              <form class="first__section-form">
                <div class="form-group">
                  <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Email">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control"  placeholder="Username">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control"  placeholder="Password">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control"  placeholder="Codigo sponsor (opcional)">
                </div>
                <div class="form-group">
                  <button type="submit" class="float-right">ENVIAR</button>
                </div>
                <p class="first__section-form-terms">
                  By clicking “Sign up for Master Miner Club, you agree to our terms of service and privacy statement.
                </p>
              </form>
            </div>
          </div>
        </div> 
      </div>
    </section>
    
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import jQuery from 'jquery'
export default {
  props: ['menu'],
  name:'Section1',
  components:{ 
    Menu
  },

  mounted() { 
    let cont = () => jQuery("#first-section")
            .css("min-height", jQuery( window ).height())

    let cont2 = () => jQuery("#first-section-container")
            .css("min-height", (jQuery( window ).height() -300))
    jQuery(document).ready(function() {
      cont()
      cont2()
      jQuery( window ).resize(function() {
        cont()
        cont2()
      })
    })
  }
}
</script>

<style scoped>
  .first__section-form-terms{
    padding-top: 10px;
    font-size: 10px
  }

  .first__section-form input {
    border-radius: 0;
    border-radius: 5px;
  }

  .first__section-form button {
    width: 100%;
    border-radius: 0;
    background-color:transparent;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 15px;
    color: white;
    margin-bottom: 10px
  }

  .first__section-form button:hover {
    border: 1px solid #3e9fef;
    background-color: #3e9fef;
    color: #fff !important;
    cursor: pointer;
  }

  .first__section-form{
    padding-top: 20px
  }

  .first__section-content-1{
    margin-right: 50px
  }

  .first__section-content-2{
    border-radius:3px !important;
    margin-left: 50px;
    max-width: 400px;
    min-height: 300px;
    background-color: #025385;
    padding: 20px
  }
  
  .first__section-content-1 h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .first__section-content-1 h1 {
    font-size: 3.3rem;
    font-weight: 400;
  }

  .first__section-description{
    margin-top: 30px;
    margin-bottom: 60px;
  }

  .first__section-content-1 p{
    color: #dad9d9;
    margin-bottom: 0px
  }

  .first__section {
    color: #fff;
    font-size: 18px;
  }

  #first-section {
    background-color: #000002;
    background-image: url(/assets/back/section-1.png);
    width: 100%;
    background-size: cover;
    background-position: center 301px;
    background-repeat: no-repeat;

  }

</style>
