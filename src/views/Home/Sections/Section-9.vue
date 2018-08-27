<template>

  <div>
    <!-- <section class="allocation">
      <div>
        <h1>TOKEN ALLOCATION</h1>
        <hr size="15" align="left" width="20%" color="#e0e0e0" margin-left="1rem">
        <h2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aperiam fuga officia voluptatum nemo, mollitia consectetur id vero rem sequi corrupti</h2>
      </div>
      <div class="image-and-text">
          <img class="laptop" src="/assets/img/section9.png" alt="">
          <ul>
            <li>&#10004; Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>&#10004; Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li>&#10004; Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
          </ul>
      </div>
      <div>

      </div>
      
  </section> -->


  <!-- <section class="before_last">
    <div class="form-custom">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="exampleInputGroup1"
                      label="Email address:"
                      label-for="exampleInput1"
                      description="We'll never share your email with anyone else.">
          <b-form-input id="exampleInput1"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Your Name:"
                      label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Enter name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup3"
                      label="Food:"
                      label-for="exampleInput3">
          <b-form-select id="exampleInput3"
                        :options="foods"
                        required
                        v-model="form.food">
          </b-form-select>
        </b-form-group>
        <b-form-group id="exampleGroup4">
          <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </section> -->
  </div>

</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style scoped>
  .before_last{
    padding: 30rem;
    background: #000;
  }

  .allocation {
    padding: 10rem 3rem;
    background-color: black;
    color: #e0e0e0;
    height: 100%;
  }

  .allocation h1 {
    font-weight: 300;
    font-size: 2.5rem;
    border-bottom: 1px solid rgba(416,230,233,0.5);
    border-bottom: 10px;
  }

  .allocation h2 {
    /* font-weight: 200; */
    font-size: 1rem;
    line-height: 2rem;
    color: #999999;
  }

  hr {
    margin-left: 1rem;
  }
  
  .image-and-text {
    display: flex;
    justify-content: center;
    color: #76cafa;
  }

  .laptop {
    height: 25rem;
  }

  .image-and-text ul {
    /* padding: 5rem; */
  }

  .image-and-text li {
    list-style: none;
    margin: 4rem 0;
    font-size: 1.3rem;
  }

  .form-custom {
    background-color: #999999;
    padding: 10px
  }
  
</style>