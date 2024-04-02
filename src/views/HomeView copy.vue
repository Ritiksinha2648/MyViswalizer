<template>
  <div>
    
    <HelloWorld/>
<ImageSection/>
<PageFooter/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ImageSection from '@/components/Images.vue'
import PageFooter from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ImageSection,
    PageFooter
  }
}
</script>
