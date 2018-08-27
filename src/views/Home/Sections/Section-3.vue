<template>
  <div>
    <section class="third__section" >
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="500">
          <div class="">
<<<<<<< HEAD
            <h1>
              MASTER NODO?
            </h1>
            <p>
              Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...
            </p>
            <button @click="scroll()">
              COMENZAR AHORA
            </button>
=======
            <h1>MASTER NODO?</h1>
            <hr size="15" align="left" width="20%" color="#e0e0e0" margin-left="1rem">
            <p>Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...</p>
            <button>COMENZAR AHORA</button>
>>>>>>> cfa50cc5c6969a3055d97e36318bb75fb6c74bd1
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
<<<<<<< HEAD
            <h1>
              ANALISYS DE MERCADO
            </h1>
            <p>
              Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...
            </p>
            <button @click="scroll()">
              COMENZAR AHORA
            </button>
=======
            <h1>ANALISYS DE MERCADO</h1>
            <hr size="15" align="left" width="20%" color="#e0e0e0" margin-left="1rem">
            <p>Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...</p>
            <button>COMENZAR AHORA</button>
>>>>>>> cfa50cc5c6969a3055d97e36318bb75fb6c74bd1
          </div>
      </div>
      <div class="container section3_section" data-aos="fade-up" data-aos-delay="200">
          <div class="">
<<<<<<< HEAD
            <h1>
              INVERSIÓN EN MASTERNODOS
            </h1>
            <p>
              Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...
            </p>
            <button @click="scroll()">
              COMENZAR AHORA
            </button>
=======
            <h1>INVERSIÓN EN MASTERNODOS</h1>
            <hr size="15" align="left" width="20%" color="#e0e0e0" margin-left="1rem">
            <p>Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...</p>
            <button>COMENZAR AHORA</button>
>>>>>>> cfa50cc5c6969a3055d97e36318bb75fb6c74bd1
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
<<<<<<< HEAD
            <h1>
              ESTRATEGIA DE INVERSION
            </h1>
            <p>
              Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...
            </p>
            <button @click="scroll()">
              COMENZAR AHORA
            </button>
=======
            <h1>ESTRATEGIA DE INVERSION</h1>
            <hr size="15" align="left" width="20%" color="#e0e0e0" margin-left="1rem">
            <p>Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...</p>
            <button>COMENZAR AHORA</button>
>>>>>>> cfa50cc5c6969a3055d97e36318bb75fb6c74bd1
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
    width: 100%
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
