<template>
    <section class="second__section">
      <div class="container second__section-caption">
        <div class="sub-logo">
          <img src="/assets/img/main_logo.svg" alt="" data-aos="fade-right" data-aos-delay="500">
        </div>
        <div class="text-ju stify" data-aos="fade-left" data-aos-delay="500">
          <p><strong>MASTERMINERCLUB</strong> es el primer pool de minería de criptomoneda con MASTERNODOS, que permite a cualquier persona u empresa, obtener fantásticos dividendos, sin necesidad de adquirir costosos equipos, asumir elevadas facturas de energía, ni tener conocimientos técnicos. </p>
          <p><b>MMC</b>nace de la necesidad de un grupo de empresarios, de efectuar pagos periódicos de una manera ágil y segura entre continentes, sin tener que depender de la alta volatilidad del precio del BitCoin. Encontrando en los  masternodos monedas con grandes proyectos y fabulosos retornos,  con una tecnología más eficiente y económica.</p>
        </div>
      </div>
    </section>
</template>

<style scoped>

  .second__section{
    display: flex;
    min-height: 43rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    background: transparent url("/assets/img/grey.png");
    background-repeat: no-repeat;
    background-size: 720px;
    background-position: -40% bottom;
}
  
.second__section-caption {
    display: flex;
    justify-content: center;
    align-items: center; 
    align-content: center;
    width: 100%;
    margin-top: -10rem;
  }

  .sub-logo {
    width: 100%;
  }

@media (max-width: 1000px){
    .second__section {
      background: none;
    }
    
    .second__section-caption {
      flex-direction: column;
      }

    .sub-logo {
      width: 50%;
    }      
  }

</style>

<script>

export default {

}
</script>