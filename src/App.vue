<template>
  <div id="app">
    <Navbar/>
    <div class="container">
    <router-view />
    </div>
  </div>
</template>

<script> 
import Navbar from '@/components/Navbar'


export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components:{
    Navbar
  }
};
</script>

<style lang="scss">
*{
  font-family: 'Poppins', sans-serif;
}

</style>
