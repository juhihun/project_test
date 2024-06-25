<template>
  <div class="home">
    
    <Header></Header>
    <Section></Section>
    <Footer></Footer>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Section from '@/components/Section.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header, Section, Footer
  }
}
</script>
