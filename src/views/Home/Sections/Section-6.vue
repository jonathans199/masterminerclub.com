<template>
  <section class="sixth__section">
    <div class="container align-items-center" id="sixth-section-container">
      <div class=" ">
        <h2>NUESTROS PLANES</h2>
          <div class="card-deck">
            <div  class="card card-custom">
              <div class="card-side card-front">
                <div class="card-img-top card-image-1" alt="Card image cap"> </div>
                <div class="card-body">
                  <h5 class="card-title_custom title1">Basic</h5>
                  <p class="card-text card-text_custom">
                    <ul>
                      <li>RENT. 12% / mes </li>
                      <li>$1 USD X 450 DÍAS </li>
                      <li>Total ROI: $450 USD</li>
                    </ul>
                  </p>
                  <div class="sixth__section-button">
                    <button class="button-adquirir" @click="scroll()">Adquirir ahora</button>
                  </div>
                </div>
              </div>    
            </div>

            <div class="card card-custom">
              <div class="card-front card-img-top card-image-2" alt="Card image cap"> </div>
              <div class="card-body">
                <h5 class="card-title_custom title2">Advanced</h5>
                <p class="card-text card-text_custom">
                  <ul>
                    <li>RENT. 12% / mes </li>
                    <li>$2 USD X 500 DÍAS </li>
                    <li>Total ROI: $1000 USD</li>
                  </ul>
                 </p>
                <div class="sixth__section-button">
                  <button class="button-adquirir" @click="scroll()">Adquirir ahora</button>
                </div>
              </div>
            </div>

            <div class="card card-custom">
              <div class="card-img-top card-image-3" alt="Card image cap"> </div>
              <div class="card-body">
                <h5 class="card-title_custom title3">Pro</h5>
                <p class="card-text card-text_custom">
                  <ul>
                    <li>RENT. 15% / mes </li>
                    <li>$5 USD X 400 DÍAS </li>
                    <li>Total ROI: $2000 USD</li>
                  </ul>
                 </p>
                <div class="sixth__section-button">
                  <button class="button-adquirir" @click="scroll()">Adquirir ahora</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import helper from '@/helpers/functions'

export default {
  name:'Section6',
  methods: {
    scroll(){
      helper.goToByScroll('#first-section')
    }
  }
}
</script>

<style scoped>
  .sixth__section-button {
    display: flex;
    justify-content: center;
  }

  .sixth__section {
    display: flex;
    background-color: #000;
    color: #eee;
    padding: 10rem 0
  }

  .card-deck {
    flex-direction: row;
  }

  @media (max-width: 1000px){
    .card-deck {
      flex-direction: column;
    }
  }

  .sixth__section li {
    list-style-type: none;
    font-size: 15px;
  }

  .card-custom {
    perspective: 150rem;
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden; 
    position: relative;
    background-color: #133c5e;
    border-radius: .5px;  
  }

  .card__side--front {
    background-color: white;
    z-index: 2;
  }

  /* .card-custom:hover {
    transform: rotateY(-180deg);
  }

  .card-custom-back:hover {
    transform: rotateY(0);
  } */
  
  .card-img-top {
    margin: 0;
    height: 15rem;
    background-size: cover;
    background-blend-mode: screen;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }

  .card-image-1 { 
    background-image: linear-gradient(to right bottom, #ffb900, #ff7730), url(/assets/img/platinum.jpeg);
  }

  .card-image-2 {
    background-image: linear-gradient(to right bottom, #2998ff, #5643fa), url(/assets/img/rolex.jpg);
  }

  .card-image-3 {
    background-image: linear-gradient(to right bottom, #7ed56f, #28b485), url(/assets/img/jet.jpg);
  }

  .card-title_custom {
    top: 12rem;
    right: 1rem;
    /* width: 45%; */
    font-size: 2.8rem;
    padding: 8px;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: #fff;
    position: absolute;
  }
  
  .title1 {
    background-image: linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85));
  }

  .title2 {
    background-image: linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85));
  }

  .title3 {
    background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.85), rgba(40, 180, 133, 0.85));
  }

  .card-text_custom {
    padding: 1rem;
  }

   .card-text_custom ul {
    list-style: none;
    /* width: 80%; */
    margin: 0 auto;
    padding: 0;
  }

  .card-text_custom ul li {
    text-align: center;
    font-size: 1rem;
    padding: 1rem;
  }

  .card-text_custom li:not(:last-child) {
    border-bottom: 1px solid rgba(228,230,233,0.2);
  }

  .sixth__section-price {
    margin-top: 35px
  }
  .sixth__section-description {
    margin-top: 35px;
    color: #218ffa;
  }

  .button-adquirir {
    background-color: transparent;
    color: #8ebbe8;
    border: 1px solid #8a8a8a;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 1px;
  }

  .button-adquirir:hover {
    border: 1px solid #3e9fef;
    background-color: #3e9fef;
    color: #fff !important;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;
  }
</style>





