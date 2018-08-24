<template>
  <section class="sixth__section">
    <div class="container align-items-center" id="sixth-section-container">
      <div class=" ">
        <h2>NUESTROS PLANES</h2>
          <div class="card-deck">
            <div class="card card-1">
              <div class="card-img-top" alt="Card image cap"> </div>
              <div class="card-body">
                <h5 class="card-title_custom">BASIC</h5>
                <p class="card-text">
                  <ul>
                    <li>$ 1 USD x 450 DíAS</li>
                    <li>$ 1 USD x 450 DíAS</li>
                    <li>$ 1 USD x 450 DíAS</li>
                  </ul>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card card-2">
              <img class="card-img-top" src="/assets/img/section7-2.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card card-3">
              <img class="card-img-top" src="/assets/img/section7-3.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
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

  // mounted() {
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


  // }
}
</script>

<style scoped>


  .sixth__section {
    display: flex;
    background-color: #000;
    color: white;
    padding: 10rem 0
  }


  .sixth__section li {
    list-style-type: none;
    font-size: 15px;
  }
  
  .card-img-top {
    margin: 0;
    height: 18rem;
    background-size: cover;
    background-blend-mode: screen;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    background-image: linear-gradient(to right bottom, #ffb900, #ff7730), url(/assets/img/basic_plan.jpg);
  }

  .card-title_custom {
    font-size: 2.8rem;
    padding: 8px;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: #fff;
    position: absolute;
    top: rem;
    right: 1rem;
    width: 45%;
    background-image: linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85));
    
  }


  .sixth__section-price {
    margin-top: 35px
  }
  .sixth__section-description {
    margin-top: 35px;
    color: #218ffa;
  }

  .card-1 {
    background-color: #133c5e;
    border-radius: .5px;
    
  }

  .card-2 {
    background-color: #e7eeff;
    border-radius: .5px;
  }

  .card-3 {
    background-color: #133c5e;
    border-radius: .5px;
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





