<template>
<!-- content -->
<div id="content">
  <div class="inner">
    <div class="wrap">
      <div class="cont">

        <Header />

        <img src="../assets/images/artMain.png" alt="">

        </div>
      </div>
    </div>
  </div><!-- /inner -->
</div><!-- /content -->
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
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
