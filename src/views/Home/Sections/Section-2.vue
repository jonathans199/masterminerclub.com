<template>
  <div>
    <section id="second-section" class="second__section">
          <div class="sub-logo">
            <img src="/assets/img/main_logo.svg" alt="" data-aos="fade-right" data-aos-delay="500">
          </div>
          <div class="text-ju stify" data-aos="fade-left" data-aos-delay="500">
            <p><strong>MASTERMINERCLUB</strong> es el primer pool de minería de criptomoneda con MASTERNODOS, que permite a cualquier persona u empresa, obtener fantásticos dividendos, sin necesidad de adquirir costosos equipos, asumir elevadas facturas de energía, ni tener conocimientos técnicos. </p>
            <p><b>MMC</b>nace de la necesidad de un grupo de empresarios, de efectuar pagos periódicos de una manera ágil y segura entre continentes, sin tener que depender de la alta volatilidad del precio del BitCoin. Encontrando en los  masternodos monedas con grandes proyectos y fabulosos retornos,  con una tecnología más eficiente y económica.</p>
          </div>
    </section>
    <!-- <div class="second__section-end"></div> -->
  </div>
</template>

<style scoped>

  .second__section{
    display: flex;
    margin-top: 100px;
    justify-content: center;
    align-content: center;
    position: relative;
    /* padding: 10rem; */
    width: 100%;

    
    min-height: 38rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    background: transparent url("/assets/img/grey.png");
    background-repeat: no-repeat;
    background-size: 720px;
    background-position: -40% bottom;
  }
  
  .sub-logo {
    width: 80%;
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
