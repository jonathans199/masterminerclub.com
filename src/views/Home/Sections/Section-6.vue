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
              
              <div class="card-back"></div>
              
            </div>
            <div class="card card-custom card-2">
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

            <div class="card card-custom card-3">
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











        


        <!-- <div class="sixth-section-plans card-deck">
          <div class="card" id="plan-1">
            <div class="card-body custom-card__body">
              <div class="text-center">
                <img src="/assets/img/section7-1.png" alt="">
              </div>
              <div class="sixth__section-description">
                <ul>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card " id="plan-2">
            <div class="card-body">
              <div class="text-center">
                <img src="/assets/img/section7-2.png" alt="">
              </div>
              <div class="sixth__section-description">
                <ul>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card" id="plan-3">
            <div class="card-body">
              <div class="text-center">
                <img src="/assets/img/section7-3.png" alt="">
              </div>
              <div class="text-center sixth__section-price">
                <b>$250</b> / Month
              </div>
              <div class="sixth__section-description">
                <ul>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                  <li>Lorem ipsum, dolor sit amet </li>
                </ul>
              </div>
            </div>
          </div>
        </div> -->


      </div>
    </div>
    


  </section>

  



</template>

<script>

  import jQuery from 'jquery'
  export default {
    
    name:'Section6',

  mounted() {

    document.querySelector("#card1").classList.toggle("flip");

      /* 
      * Holder.js for demo image
      * Just for demo purpose
      */

              


  //   let cont = () => jQuery("#sixth-section")
  //           .css("max-height", (jQuery( window ).height()))

  //   let cont2 = () => jQuery("#sixth-section-container")
  //           .css("min-height", (jQuery( window ).height()))
  //   jQuery(document).ready(function() {
  //     cont()
  //     cont2()
  //     jQuery( window ).resize(function() {
  //       cont()
  //       cont2()
  //     })
  //   })


  }
}
</script>

<style scoped>

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

  /* from starter


  .card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
}
.card__side {
  height: 52rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
}
.card__side--front {
  background-color: white;
  z-index: 2;
}
.card__side--front:hover {
  z-index: 1;
}
.card__side--back {
  background-color: green;
  transform: rotateY(180deg);
  z-index: 2;
}
.card__side--back:hover {
  z-index: 1;
}
.card__side--back-1 {
  background-image: linear-gradient(to right bottom, gray, black);
}
.card__side--back-2 {
  background-image: linear-gradient(to right bottom, gray, black);
}
.card__side--back-3 {
  background-image: linear-gradient(to right bottom, gray, black);
}
.card:hover .card__side--front {
  transform: rotateY(-180deg);
}
.card:hover .card__side--back {
  transform: rotateY(0);
}
.card__picture {
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-left-radius: 3px;
}
.card__picture--1 {
  background-image: linear-gradient(to right bottom, gray, black), url(../img/nat-5.jpg);
}
.card__picture--2 {
  background-image: linear-gradient(to right bottom, gray, black), url(../img/nat-6.jpg);
}
.card__picture--3 {
  background-image: linear-gradient(to right bottom, gray black), url(../img/nat-7.jpg);
}
.card__heading {
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  color: white;
  position: absolute;
  top: 12rem;
  right: 2rem;
  width: 75%;
}
.card__heading-span {
  padding: 1rem 1.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
.card__heading-span--1 {
  background-image: linear-gradient(to right bottom, rgba(128, 128, 128, 0.85), rgba(0, 0, 0, 0.85));
}
.card__heading-span--2 {
  background-image: linear-gradient(to right bottom, rgba(128, 128, 128, 0.85), rgba(0, 0, 0, 0.85));
}
.card__heading-span--3 {
  background-image: linear-gradient(to right bottom, rgba(128, 128, 128, 0.85), rgba(0, 0, 0, 0.85));
}
.card__details {
  padding: 3rem;
}
.card__details ul {
  list-style: none;
  width: 80%;
  margin: 0 auto;
}
.card__details ul li {
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
}
.card__details ul li:not(:last-child) {
  border-bottom: 1px solid gray;
}
.card__cta {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
}
.card__price-box {
  text-align: center;
  color: white;
  margin-bottom: 8rem;
}
.card__price-only {
  font-size: 1.4rem;
  text-transform: uppercase;
}
.card__price-value {
  font-size: 6rem;
  font-weight: 100;
}

*/




</style>





