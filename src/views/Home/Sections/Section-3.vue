<template>
  <div>
    <section  id="third-section" class="third__section">
      <div class="container d-flex align-items-center" id="third-section-container">
        <div class="row col-12">
          <div class="col-6 ">
            <h1>
              MASTER NODO?
            </h1>
            <div class="third__section-divide"/>
            <p>
              Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...
            </p>
            <button>
              COMENZAR AHORA
            </button>
          </div>
          <div class="col-6 text-justify d-flex align-items-center">
            <img src="/assets/img/header-image-dark.png" alt="">
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<style scoped>
  .third__section button{
    background-color: transparent;
    color: #8ebbe8;
    border: 1px solid #8a8a8a;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 5px
  }
  
  .third__section button:hover{
    border: 1px solid #3e9fef;
    background-color: #3e9fef;
    color: #fff !important;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;
  }

  .third__section p {
    margin-top: 70px;
     margin-bottom: 70px;
     /* width: 350px; */
  }
  .third__section-divide {
    border: 1px solid white;
    width: 250px;
  }
  .third__section h1 {
    font-weight: 300
  }
  .third__section img {
    width: 100%
  }
  .third__section{
    background-color: #000;
    color: white
  }
      
</style>

<script>
import jQuery from 'jquery'
export default {
  name:'Section3',

  mounted() {
    let cont = () => jQuery("#third-section")
            .css("min-height", jQuery( window ).height())

    let cont2 = () => jQuery("#third-section-container")
            .css("min-height", (jQuery( window ).height()))
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
