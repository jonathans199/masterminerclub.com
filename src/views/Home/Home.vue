<template>
  <div>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Section1 from './Sections/Section-1.vue'
import Section2 from './Sections/Section-2.vue'
import Section3 from './Sections/Section-3.vue'
import Section4 from './Sections/Section-4.vue'
import Section5 from './Sections/Section-5.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5
  }
}
</script>
