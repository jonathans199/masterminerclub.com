<template>
  <div>
    <section id="first-section">
      <div class="image_overlay"></div>
      <Menu/>
        <div class="cover-caption container">
          <div class="first__section-content-1" data-aos="fade-right" data-aos-delay="500">
            <div class="sub-text">MASTER MINER CLUB</div>
            <hr size="120" align="right" width="20%" color="#e0e0e0" margin-right="1rem">  
            <h1>UNETE AHORA</h1>
            <div class="sub-text first__section-description">
              <p>LA FORMA MAS INNOVADORA Y</p>
              <p>LUCRATIVA DE MINAR</p>
              <p>CRYPTOMONEDA</p>
            </div> 
            <h3 id="iniciar">INICIAR <i class="fa fa-arrow-right"></i></h3>
          </div>
          <div class="first__section-content-2" data-aos="flip-left" data-aos-delay="900">
            <div class="">
              <form @submit="register" class="first__section-form">
                <div class="form-group">
                  <h2 class="form-header">registrate hoy!</h2>
                  <input v-model="form.email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Correo Electronico" required>
                </div>
                <div class="form-group">
                  <input v-model="form.username" type="text" class="form-control"  placeholder="Usuario" required>
                </div>
                <div class="form-group">
                  <input v-model="form.password" type="password" class="form-control"  placeholder="Contraseña">
                </div>
                <div class="form-group">
                  <input v-model="form.parent_uuid" type="text" class="form-control"  placeholder="Codigo Sponsor (opcional)" required>
                </div>
                <div class="form-group">
                  <button v-if="!loading" type="submit" class="float-right">ENVIAR</button>
                  <button v-if="loading" type="submit" class="float-right">CARGANDO <i class="fa fa-spinner fa-spin" /></button>
                </div>
                <p class="first__section-form-terms">
                  Al hacer clic en "Registrarse en Master Miner Club", usted acepta nuestra

                  <router-link to="/terms" class="terms__link">términos de servicio y privacidad. </router-link>
                </p>
              </form>
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
  .terms__link {
    color: white;
    text-decoration: underline
  }
  #first-section {
    /* display: flex; */
    background-color: #000002;
    background-image: url(../../../assets/img/blockchain.jpg);
    width: 100%;
    background-size: cover;
    background-position: center 301px;
    background-repeat: no-repeat;
    color: #fff;
    font-size: 18px;
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

  .cover-caption {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    margin-top: 8rem;
  }

  .sub-text {
    font-size: 1rem;
    /* color: #a3a3a3; */
    font-weight: 100;
    letter-spacing: 3px;
  }

  .first__section-form-terms{
    /* padding-top: 10px; */
    font-size: .89rem;
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

  .first__section-content-1 {
    text-align: right;
    margin-right: 5rem;
    z-index: 10;
  }

  .first__section-content-2{
    border-radius:1px !important;
    /* left: 1rem; */
    max-width: 40%;
    min-height: 300px;
    background-color: #025385;
    padding: 20px;
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

  .form-header {
    letter-spacing: 1px;
    font-weight: 100;
    text-align: center;
  }

  @media (max-width: 1000px){
    .cover-caption {
      flex-direction: column;
      margin-top: 0;
    }

    .first__section-content-1{
        text-align: center;
        margin-right: 0;
        margin-top: 6rem;
      }
    
    #iniciar {
      display: none;

    }
    hr {
      display: none;
    }

    .first__section-content-2 {
      max-width: 85%;
      margin-bottom: 10rem;
    }
      
  }
</style>
