<template>
    <section class="third__section" >
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="500">
          <div class="text_section">
            <h1>¿MASTER NODO?</h1>
            <p>La función principal de los Masternodos es retransmitir transacciones a través de la red, dar anonimato a los fondos y dar gobernabilidad a la moneda. A cambio de proporcionar estos servicios los Masternodos reciben una parte de la recompensa de cada bloque minado.</p>
            <button @click="scroll()">COMENZAR AHORA</button>
          </div>
          <div class="left-image">
            <img src="/assets/img/section3.png" alt="">
          </div>
      </div>
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="200">
           <div class="left-image">
            <img src="/assets/img/section4.png" alt="">
          </div>
          <div class="text_section">
            <h1>ANALISIS DE MERCADO</h1>
            <p>Contamos con algoritmos de ultima generacion, los cuales nos permiten identificar los masternodos mas rentables en el mercado.</p>
            <button @click="scroll()">COMENZAR AHORA</button>
          </div>
      </div>
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="200">
          <div class="text_section">
            <h1>¿CÓMO FUNCIONA MASTERMINERCLUB?</h1>
            <p>Cuando te unes a MasterMinerClub con cualquiera de sus contratos de minería, MMC utiliza esos recursos para adquirir MASTERNODES. Un potente algoritmo diseñado por nuestro equipo de programación, rastrea el COINMARKETCAP en busca de los mejores proyectos en los que invertir.</p>
            <p>El 50% de los fondos se invierten en masternodos, y con ello generar una ganancia diaria para nuestros mineros, un 25% se distribuye entre nuestros distribuidores a través de su plan de compensación, y el 25% restante se destina para el mantenimiento y expansión de MMC. </p>
            <button @click="scroll()">COMENZAR AHORA</button>
          </div>
          <div class="left-image">
            <img src="/assets/img/section5.png" alt="">
          </div>
      </div>
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="200">
        <div class="left-image">
          <img src="/assets/img/section6.png" alt="">
        </div>
        <div class="text_section">
          <h1>¿CÓMO GANO CON MASTERMINERCLUB?</h1>
          <ul>
            <li>RETORNO DE LA INVERSION</li>
            <li>INICIO RÁPIDO</li>
            <li>BINARIO</li>
            <li>ESTILO DE VIDA</li>
          </ul>

          <a class="section3_section-button" href="/assets/pdf/MasterMinerClubES.V2.pdf" target="_blank" >
            PRESENTACIÓN <img class="section3_section-img" src="/assets/img/pdf.svg" />
          </a>
        </div>
      </div>
    </section>
</template>

<style scoped>
  .section3_section-button {
    margin-top: 35px;
    padding-top: 15px !important;
    padding-bottom: 15px !important;
    background-color: transparent;
    color: #8ebbe8;
    border: 1px solid #8a8a8a;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 1px
  }

  .section3_section-img {
    width: 2rem !important;
  }

  .third__section button{
    margin-top: 3rem;
    background-color: transparent;
    color: #8ebbe8;
    border: 1px solid #8a8a8a;
    padding: 15px 30px;
    border-radius: 1px
  }
  
  .third__section button:hover{
    border: 1px solid #025385;
    background-color: #025385;
    color: #fff !important;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;
  }

  .third__section p {
    margin-top: 70px;
    /* margin-bottom: 70px; */
    /* min-width: 25rem; */
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
    width: 90%
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
    width: 100%;
  }
  
  @media (max-width: 1000px){

    .section3_section {
      flex-direction: column;
      justify-content: space-around;
      padding-top: 10rem;
    }

    .third__section h1 , p{
      text-align: center;
      /* font-size: 10px; */
      /* width: 80%; */
    }

    .third__section h1{
      font-size: 2rem;
    }

    .text_section{
      text-align: center;
      /* margin-top: 20rem; */
    }

    .text_section ul li {
      list-style: none;
    }
  }

</style>

<script>
import helper from '@/helpers/functions'

export default {
  name:'Section3',
  methods: {
    scroll(){
      helper.goToByScroll('#first-section')
    }
  }
}
</script>
