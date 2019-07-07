<template lang="html">
  <div id="hds" class="header">

    <div class="logo">
      <svg width="45" height="31" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="13.6176" y="0.5" width="26.8269" height="13.6893" fill="#4C4C4C"/>
      <rect x="4.59099" y="16.5836" width="26.8269" height="13.6893" fill="#4C4C4C"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M40.5287 13.9834L34.1874 29.684L34.0485 14.0753L40.5287 13.9834Z" fill="#4C4C4C"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.49663 16.7552L10.838 1.05458L10.9768 16.6633L4.49663 16.7552Z" fill="#4C4C4C"/>
      </svg>
    </div>


    <div class="menu">
      <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="27" height="3.18182" fill="#4A4A4A"/>
      <rect y="8.90909" width="27" height="3.18182" fill="#4A4A4A"/>
      <rect y="17.8182" width="27" height="3.18182" fill="#4A4A4A"/>
      </svg>
    </div>
<!-- /.menu -->
  </div>
</template>


<script>
import dev from '../assets/js/dev'

export default {
  props: {
    // index: {
    //   type: Number
    // }
  },
  data() {
    return {
      // inputIndex: this.index
    }
  }
}
</script>

<style lang="sass" scoped>
.logo
  svg
    width: 50px!important
    height: auto!important
.header
  display: flex
  justify-content: space-between
  align-items: center
  height: 60px
  padding: 10px

</style>
