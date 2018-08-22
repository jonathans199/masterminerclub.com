<template>
  <div>
    <section  id="third-section" class="third__section">
      <div class="container master-node__section">
          <div class="">
            <h1>
              MASTER NODO?
            </h1>
            <p>
              Somos MasterMinerClub un grupo de visionarios (inversores, programadores y networkers) que hemos...
            </p>
            <button>
              COMENZAR AHORA
            </button>
          </div>
          <div class="left-image">
            <img src="/assets/img/section3.png" alt="">
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
    font-weight: 300
  }
  .third__section img {
    width: 100%
  }
  .third__section{
    margin-top: -20vh;
    padding: 25rem 0;
    background-color: #000;
    color: #e0e0e0;
    -webkit-clip-path: polygon(0 23%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 23%, 100% 0, 100% 100%, 0% 100%);
  }
  .master-node__section {
    display: flex;
    justify-content: center;
    align-items: center;
  } 
  

</style>

<script>
import jQuery from 'jquery'
export default {
  name:'Section3',

  // mounted() {
  //   let cont = () => jQuery("#third-section")
  //           .css("min-height", jQuery( window ).height())

  //   let cont2 = () => jQuery("#third-section-container")
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
