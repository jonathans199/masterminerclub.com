<template>
  <div>
    <section class="third__section" >
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="500">
          <div class="">
            <h1>
              ¿MASTER NODO?
            </h1>
            <p>
              La función principal de los Masternodos es retransmitir transacciones a través de la red, dar anonimato a los fondos y dar gobernabilidad a la moneda. A cambio de proporcionar estos servicios los Masternodos reciben una parte de la recompensa de cada bloque minado.
            </p>
            <button @click="scroll()">
              COMENZAR AHORA
            </button>
          </div>
          <div class="left-image">
            <img src="/assets/img/section3.png" alt="">
          </div>
      </div>
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="200">
           <div class="left-image">
            <img src="/assets/img/section4.png" alt="">
          </div>
          <div class="">
            <h1>
              ANALISIS DE MERCADO
            </h1>
            <p>
              Contamos con algoritmos de ultima generacion, los cuales nos permiten identificar los masternodos mas rentables en el mercado.
            </p>
            <button @click="scroll()">
              COMENZAR AHORA
            </button>
          </div>
      </div>
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="200">
          <div class="">
            <h1>
              ¿CÓMO FUNCIONA MASTERMINERCLUB? 
            </h1>
            <p>
              • Cuando te unes a MasterMinerClub con
              cualquiera de sus contratos de minería, MMC
              utiliza esos recursos para adquirir
              MASTERNODES. Un potente algoritmo
              diseñado por nuestro equipo de programación,
              rastrea el COINMARKETCAP en busca de los
              mejores proyectos en los que invertir.
            </p>
            <p>
              • El 50% de los fondos se invierten en
              masternodos, y con ello generar una ganancia
              diaria para nuestros mineros, un 25% se
              distribuye entre nuestros distribuidores a través
              de su plan de compensación, y el 25% restante
              se destina para el mantenimiento y expansión de
              MMC. 
            </p>
            <button @click="scroll()">
              COMENZAR AHORA
            </button>
          </div>
          <div class="left-image">
            <img src="/assets/img/section5.png" alt="">
          </div>
      </div>
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="200">
           <div class="left-image">
            <img src="/assets/img/section6.png" alt="">
          </div>
          <div class="">
            <h1>
              ¿CÓMO GANO CON MASTERMINERCLUB?
            </h1>
            <ul>
              <li>ROI</li>
              <li>INICIO RÁPIDO</li>
              <li>BINARIO</li>
              <li>LIFESTYLE</li>
            </ul>
            <button @click="scroll()">
              COMENZAR AHORA
            </button>
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
    border-radius: 1px
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
    min-width: 25rem;
  }
  .third__section-divide {
    border-bottom: 1px solid rgba(228,230,233,0.2);
    width: 250px;
    padding-left: 20px;
  }
  .third__section h1 {
    font-weight: 300;
    padding: 0;
  }
  .third__section img {
<<<<<<< HEAD
    width: 90%
=======
    width: 90%;
>>>>>>> e01b4f4ae1ced1deb4677eff202b027b76f284e4
  }
  .third__section{
    margin-top: -20vh;
    padding: 33rem 0 0 0;
    color: #e0e0e0;
    -webkit-clip-path: polygon(0 23%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 20vh, 100% 0, 100% 100%, 0% 100%);
    background: #000 url("/assets/img/bluebk2.jpg");
    background-repeat: repeat-y;
    background-size: 2500px;
    background-position: right 1500px;
    
  }
  .section3_section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 43rem;
    height: 400px;
  } 
  

</style>

<script>
import jQuery from 'jquery'
import helper from '@/helpers/functions'

export default {
  name:'Section3',
  methods: {
    scroll(){
      helper.goToByScroll('.first__section')
    }
  }
}
</script>
