<template>
  <div>
    <section  id="second-section" class="second__section">
      <div class="container d-flex align-items-center" id="second-section-container">
        <div class="row col-12">
          <div class="col-5 ">
            <img src="/assets/img/main_logo.svg" alt="">
          </div>
          <div class="col-7 text-justify d-flex align-items-center">
            <p>
              Somos MasterMinerClub un grupo visionarios (inversores, programadores y networkers) que hemos visto una gran oportunidad con el auge y crecimiento que han tenido las Criptomonedas los últimos años, por ese motivo estamos poniendo nuestro conocimiento y experiencia a tu servicio, para juntos crear la anhelada independencia financiera, recibiendo una rentabilidad fija día tras día, además de fabulosos bonos y comisiones, con una herramienta aún desconocida para la mayoría, pero que es el corazón de este mercado, nosotros apostamos por ella como el “siguiente nivel en la minería” (#TheNextLevelMining), hablamos de los MASTERNODOS
            </p>
          </div>
        </div>
      </div>
      
    </section>
    <!-- <div class="second__section-end"></div> -->
  </div>
</template>

<style scoped>

  .second__section{
    position: relative;
    /* width: 100%; */
    min-height: 67vh;
    background: transparent url("/assets/img/grey.png");
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    background-repeat: no-repeat;
    background-size: 720px;
    background-position: -40% bottom;
  }
      
</style>

<script>
import jQuery from 'jquery'
export default {
  name:'Section2',

  // mounted() {
  //   let cont = () => jQuery("#second-section")
  //           .css("max-height", (jQuery( window ).height() -600))

  //   let cont2 = () => jQuery("#second-section-container")
  //           .css("min-height", (jQuery( window ).height()))
  //   jQuery(document).ready(function() {
  //     cont()
  //     cont2()
  //     jQuery( window ).resize(function() {
  //       cont()
  //       cont2()
  //     })
  //   })


  // }
}
</script>
