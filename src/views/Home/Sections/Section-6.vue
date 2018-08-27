<template>
  <section class="sixth__section">
    <div class="container align-items-center" id="sixth-section-container">
      <div class=" ">
        <h2>NUESTROS PLANES</h2>
          <div class="card-deck">
            <div class="card card-flipper" id="card" @click="flip" >
              <div class="front " >
                <div class="card-img-top card-image-1" alt="Card image cap"></div>
                <div class="card-body">
                  <h5 class="card-title_custom title1">Platinum</h5>
                  <p class="card-text card-text_custom">
                    <ul>
                      <li>$ 1,000 USD MINING PACK</li>
                      <li>$5 USD X 400 DíAS</li>
                    </ul>
                  </p>
                  <button class="button-adquirir">Adquirir ahora</button>
                </div>
              </div>    
              
              <div class="back ">
                <div class="card-img-top card-image-1 d-block" alt="Card image cap"></div>
                <div class="card-body">
                  <h5 class="card-title_custom title1">Platinum</h5>
                  <p class="card-text card-text_custom">
                    <ul>
                      <li>$ 1,000 USD MINING PACK</li>
                      <li>$5 USD X 400 DíAS</li>
                    </ul>
                  </p>
                  <button class="button-adquirir">Adquirir ahora</button>
                </div>
              </div>         
            </div>

            <div class="card ">
              <div class="card-front card-img-top card-image-2" alt="Card image cap"> </div>
              <div class="card-body">
                <h5 class="card-title_custom title2">gold</h5>
                <p class="card-text card-text_custom">
                  <ul>
                    <li>$ 1 USD x 450 DíAS</li>
                    <li>$ 1 USD x 450 DíAS</li>
                    <li>$ 1 USD x 450 DíAS</li>
                  </ul>
                 </p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

            <div class="card ">
              <div class="card-img-top card-image-3" alt="Card image cap"> </div>
              <div class="card-body">
                <h5 class="card-title_custom title3">silver</h5>
                <p class="card-text card-text_custom">
                  <ul>
                    <li>$ 1 USD x 450 DíAS</li>
                    <li>$ 1 USD x 450 DíAS</li>
                    <li>$ 1 USD x 450 DíAS</li>
                  </ul>
                 </p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>

</template>

<script>
import $ from 'jquery'

export default {
  name:'Section6',
  methods: {
    flip(){
      $('#card').toggleClass('flipped')
      // $('.front').toggleClass('d-none')
      // $('.back').addClass('d-block')
    }
  }
  
}
</script>

<style scoped>
  .card-flipper {
    /* width: 100%; */
    /* height: 100%; */
    /* position: absolute; */
    -webkit-transition: -webkit-transform 1s;
    -moz-transition: -moz-transform 1s;
    -o-transition: -o-transform 1s;
    transition: transform 1s;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50% 50%;
}
.card-flipper div {
    /* display: block;
    height: 100%;
    width: 100%;
    line-height: 260px;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 140px;
    position: absolute;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden; */
}
.card-flipper .front {
  /* background: red; */
}
.card-flipper .back {
    /* background: blue; */
    /* -webkit-transform: rotateY( 180deg );
    -moz-transform: rotateY( 180deg );
    -o-transform: rotateY( 180deg );
    transform: rotateY( 180deg ); */
}
.card-flipper.flipped {
    -webkit-transform: rotateY( 180deg );
    -moz-transform: rotateY( 180deg );
    -o-transform: rotateY( 180deg );
    transform: rotateY( 180deg );
}

  /* final */

  .sixth__section {
    display: flex;
    background-color: #000;
    color: #eee;
    padding: 10rem 0
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
    background-image: linear-gradient(to right bottom, #2998ff, #5643fa), url(/assets/img/platinum.jpeg);
  }

  .card-image-3 {
    background-image: linear-gradient(to right bottom, #7ed56f, #28b485), url(/assets/img/platinum.jpeg);
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





