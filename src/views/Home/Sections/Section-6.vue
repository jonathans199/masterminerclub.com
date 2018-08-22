<template>
  <section  id="sixth-section" class="sixth__section">
    <div class="container d-flex align-items-center" id="sixth-section-container">
      <div class=" col-12">
        <h5>NUESTROS PLANES</h5>
        <div class="sixth-section-plans">
          <div class="card" id="plan-1">
            <div class="card-body">
              <div class="text-center">
                <img src="/assets/img/section7-1.png" alt="">
              </div>
              <div class="text-left sixth__section-description">
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
              <div class="text-left sixth__section-description">
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
              <div class="text-left sixth__section-description">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import jQuery from 'jquery'
export default {
  name:'Section6',

  mounted() {
    let cont = () => jQuery("#sixth-section")
            .css("max-height", (jQuery( window ).height()))

    let cont2 = () => jQuery("#sixth-section-container")
            .css("min-height", (jQuery( window ).height()))
    jQuery(document).ready(function() {
      cont()
      cont2()
      jQuery( window ).resize(function() {
        cont()
        cont2()
      })
    })


  }
}
</script>

<style scoped>
  .sixth__section li {
    list-style-type: none;
  }
  
  .sixth__section img {
    width: 10rem
  }

  .sixth__section-price {
    margin-top: 35px
  }
  .sixth__section-description {
    margin-top: 35px;
    color: #218ffa
  }

  .sixth-section-plans #plan-1 {
    background-color: #133c5e;
    border-radius: 0px;
    margin-top:50px;
    min-height: 400px;
  }

  .sixth-section-plans #plan-2 {
    background-color: #e7eeff;
    border-radius: 0px;
    min-height: 575px;
    padding-top: 105px;
  }

  .sixth-section-plans #plan-3 {
    background-color: #133c5e;
    border-radius: 0px;
    margin-top:50px;
    min-height: 400px;
  }

  .sixth-section-plans .card{
    display: inline-block;
    width: 33.3%
  }

  .sixth__section {
    background-color: #000;
    color: white
  }

</style>
