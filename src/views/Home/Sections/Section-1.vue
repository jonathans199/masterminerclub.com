<template>
  <div>
    <div class="image_overlay"></div>
    <section id="first-section" class="first__section">
      <Menu/>
      <div class="container d-flex align-items-center" id="first-section-container">
        <div class="row col-12">
          <div class="col-6 text-right first__section-content-1" data-aos="fade-right" data-aos-delay="500">
            <div class="sub-text">MASTER MINER CLUB</div>
            <hr size="120" align="right" width="20%" color="#e0e0e0" margin-right="1rem">  
            <h1>UNETE AHORA</h1>
            <div class="sub-text first__section-description">
              <p>LA FORMA MAS INNOVADORA Y</p>
              <p>LUCRATIVA DE MINAR</p>
              <p>CRYPTOMONEDA</p>
            </div> 
            <h3>INICIAR <i class="fa fa-arrow-right"></i></h3>
          </div>
          <div class="col-6  d-flex justify-content-center first__section-content-2" data-aos="flip-left" data-aos-delay="900">
            <div class="col-12">
              <form @submit="register" class="first__section-form">
                <div class="form-group">
                  <h2 class="form-header">registrate hoy!</h2>
                  <input v-model="form.email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Email" required>
                </div>
                <div class="form-group">
                  <input v-model="form.username" type="text" class="form-control"  placeholder="Username" required>
                </div>
                <div class="form-group">
                  <input v-model="form.password" type="password" class="form-control"  placeholder="Password">
                </div>
                <div class="form-group">
                  <input v-model="form.parent_uuid" type="text" class="form-control"  placeholder="Codigo sponsor (opcional)" required>
                </div>
                <div class="form-group">
                  <button v-if="!loading" type="submit" class="float-right">ENVIAR</button>
                  <button v-if="loading" type="submit" class="float-right">LOADING <i class="fa fa-spinner fa-spin" /></button>
                </div>
                <p class="first__section-form-terms">
                  By clicking “Sign up for Master Miner Club, you agree to our terms of service and privacy statement.
                </p>
              </form>
            </div>
          </div>
        </div> 
      </div>
    </section>
    
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import jQuery from 'jquery'
import axios from 'axios'

export default {
  name:'Section1',
  components:{ 
    Menu
  },

  data(){
    return {
      props: {
        scroll: Object
      },
      loading: false,
      form: {},
      api: "https://api.masterminerclub.biz/api/v1/signup"
    }
  },

  mounted() {
    
    // console.log(this.props.scroll(1))
    let cont = () => jQuery("#first-section")
            .css("min-height", jQuery( window ).height())

    let cont2 = () => jQuery("#first-section-container")
            .css("min-height", (jQuery( window ).height() -300))
    jQuery(document).ready(function() {
      cont()
      cont2()
      jQuery( window ).resize(function() {
        cont()
        cont2()
      })
    })
  },

  methods: {
    register(evt){
      evt.preventDefault();
      this.loading = true
      
      axios.post(this.api, this.form)
      .then(response => {
        // response.json()
        this.loading = false
        this.$swal({
          title: 'Registration completed!',
          text: 'We have sent you an email. Please follow the activation link.'
        })
        this.resetForm()
      })
      .catch(err => {
        this.loading = false
        err.response.data.map((m) => {
          this.$toasted.error(m, {
            position:'top-right', 
            duration: 5000,
            type: 'success'
          })
        })
      })
    },

    resetForm(){
      this.form = {}
    }
  }
}
</script>

<style scoped>
  .first__section-form-terms{
    /* padding-top: 10px; */
    font-size: 10px
  }

  .first__section-form input {
    border-radius: 0;
    border-radius: 1px;
  }

  .first__section-form button {
    /* width: 100%; */
    border-radius: 0;
    background-color:transparent;
    padding: .3rem 1rem;   
    font-size: 15px;
    color: white;
    margin-left: .5rem;
  }

  .first__section-form button:hover {
    border: 1px solid #3e9fef;
    background-color: #3e9fef;
    color: #fff !important;
    cursor: pointer;
  }

  .first__section-content-1{
    margin-right: 50px
  }

  .first__section-content-2{
    border-radius:1px !important;
    left: 1rem;
    max-width: 40%;
    min-height: 300px;
    background-color: #025385;
    padding: 20px
  }
  
  .first__section-content-1 h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .first__section-content-1 h1 {
    font-size: 3.3rem;
    font-weight: 400;
  }

  .first__section-description{
    margin-top: 30px;
    margin-bottom: 60px;
  }

  .first__section-content-1 p{
    color: #dad9d9;
    margin-bottom: 0px
  }

  .first__section {
    color: #fff;
    font-size: 18px;
  }

  #first-section {
    background-color: #000002;
    background-image: url(../../../assets/img/blockchain.jpg);
    width: 100%;
    background-size: cover;
    background-position: center 301px;
    background-repeat: no-repeat;
  }

  .image_overlay {
      opacity: .4;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      overflow: hidden;
      z-index: 0;
  }

  .sub-text {
    font-size: 1rem;
    color: #a3a3a3;
    font-weight: 100;
    letter-spacing: 3px;
  }

  .form-header {
    letter-spacing: 1px;
    font-weight: 100;
    text-align: center;
    
  }

</style>
