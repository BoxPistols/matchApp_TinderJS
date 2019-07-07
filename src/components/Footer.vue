<template lang="html">
  <div id="foot" class="footer">

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
  mounted: function() {
    $('#head').click(function() {
      // alert();
    });
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
