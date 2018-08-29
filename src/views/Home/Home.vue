<template>
  <div>
    <Section1 />
    <Section2/>
    <Section3/>
    <Section6/>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Section1 from './Sections/Section-1.vue'
import Section2 from './Sections/Section-2.vue'
import Section3 from './Sections/Section-3.vue'
import Section6 from './Sections/Section-6.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Section1,
    Section2,
    Section3,
    Section6,
  }
}
</script>
