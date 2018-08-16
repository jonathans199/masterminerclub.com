<template>
  <div>
    <Section1/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Section1 from './Sections/Section-1.vue'
import Section2 from './Sections/Section-2.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Section1,
    Section2
  }
}
</script>
