<template>
<!-- content -->
<div id="content">
  <div class="inner">
    <div class="wrap">
      <div class="cont">

        <Header />

        <!-- <img src="../assets/images/artMain.png" alt=""> -->

        <div class="wrap">
          <!-- start jtinder container -->
          <div id="tinderslide">
            <ul>
              <li class="pane1">
                <div class="img"></div>
                <div>Miami Beach</div>
                <div class="like"></div>
                <div class="dislike"></div>
              </li>
              <li class="pane2">
                <div class="img"></div>
                <div>San Francisco</div>
                <div class="like"></div>
                <div class="dislike"></div>
              </li>
              <li class="pane3">
                <div class="img"></div>
                <div>Chicago</div>
                <div class="like"></div>
                <div class="dislike"></div>
              </li>
              <li class="pane4">
                <div class="img"></div>
                <div>New York</div>
                <div class="like"></div>
                <div class="dislike"></div>
              </li>
              <li class="pane5">
                <div class="img"></div>
                <div>Illustrator</div>
                <div class="like"></div>
                <div class="dislike"></div>
              </li>
            </ul>
          </div>
          <!-- end jtinder container -->
        </div>
        <!-- end padding container -->

        <!-- jTinder trigger by buttons  -->
        <!-- <div class="actions">
          <a href="#" class="dislike"><i></i></a>
          <a href="#" class="like"><i></i></a>
        </div> -->

        <!-- jTinder status text  -->
        <!-- <div id="status"></div> -->

      </div>
    </div>
  </div>
</div><!-- /inner -->
</div><!-- /content -->
</template>

<script>
import Header from '@/components/Header.vue'

import jTinder from '../assets/js/tinder/jquery.jTinder'
import transform2d from '../assets/js/tinder/jquery.transform2d'
import t_main from '../assets/js/tinder/tinder'


export default {
  components: {
    Header
  },
  props: {},
  data() {
    return {

    }
  },
  mounted: function() {
    $("#tinderslide").jTinder({
      // dislike callback
      onDislike: function(item) {
        // set the status text
        $('#status').html('Dislike image ' + (item.index() + 1));
      },
      // like callback
      onLike: function(item) {
        // set the status text
        $('#status').html('Like image ' + (item.index() + 1));
      },
      animationRevertSpeed: 200,
      animationSpeed: 400,
      threshold: 1,
      likeSelector: '.like',
      dislikeSelector: '.dislike'
    });

    /**
     * Set button action to trigger jTinder like & dislike.
     */
    $('.actions .like, .actions .dislike').click(function(e) {
      e.preventDefault();
      $("#tinderslide").jTinder($(this).attr('class'));
    });

  }

}
</script>

<style>
.content, .inner {
  height: 100vh;
}

/* Wrapper with padding */
.wrap {
  height: 300px;
  padding: 5px;
}

#tinderslide {
  position: relative;
  background: #fff;
  width: 95%;
  height: 100%;
}

#tinderslide ul {
  margin: 0;
  position: relative;
  display: block;
  height: 100%;
}

#tinderslide li {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 2;
  left: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  overflow: hidden;
  text-align: center;
  padding: 10px 10px 10px 10px;
  background: #eee;
  font-size: 24px;
  color: #000;
  border: 1px solid #fff;
  border: 1px solid #dfdfdf;
  border: 1px solid rgba(96, 96, 96, 0.2);
  transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Image text */
#tinderslide li h2 {
  color: #fff;
  font-size: 30px;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  text-shadow: -1px -1px 0 rgba(0, 0, 0, .2);
}

/* Image rotation */
#tinderslide li.pane1 {
  transform: rotate(-1deg);
}

#tinderslide li.pane2 {
  transform: rotate(2deg);
}

/* Like & dislike badge images */
#tinderslide .like,
#tinderslide .dislike {
  /* background: url("../imgs/liked.png") no-repeat scroll 0 0; */
  opacity: 0;
  height: 80px;
  position: absolute;
  width: 170px;
  left: 45px;
  top: 40px;
  z-index: 1;
  overflow: hidden;
  transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

#tinderslide .dislike {
  right: 45px;
  left: auto;
  /* background: url("../img/nope.png") no-repeat scroll 0 0; */
}

/* Image container */
#tinderslide .img {
  height: 90%;
  width: 100%;
  margin-bottom: 5px;
  position: relative;
  transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  -webkit-transform-style: preserve-3d;
}

/* Action - buttons */
.actions {
  text-align: center;
  width: 304px;
  margin: 0 auto;
  overflow: hidden;
}

.actions div {
  position: relative;
  display: inline-block;
  margin-right: -4px;
}

.actions a i {
  display: inline-block;
  width: 40px;
  height: 80px;
}

.actions a.dislike i {
  /* background: url("../img/dislike_button.png") no-repeat scroll center center; */
}

.actions a.like i {
  /* background: url("../img/like_button.png") no-repeat scroll center center; */
}

.actions a {
  float: left;
  display: block;
  background-color: #f7f7f7;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f7f7f7), to(#e7e7e7));
  background-image: -webkit-linear-gradient(top, #f7f7f7, #e7e7e7);
  color: #a7a7a7;
  margin: 36px;
  width: 80px;
  height: 80px;
  position: relative;
  text-align: center;
  line-height: 144px;
  border-radius: 50%;
  outline: none;
  box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
}

.actions a:hover {
  text-decoration: none;
  color: #555;
  background: #f5f5f5;
}

/* jTinder images */
#tinderslide .pane5 .img {
  background: url("..//assets/images/artMain.png") no-repeat scroll center center;
  background-size: cover;
}

#tinderslide .pane4 .img {
  background: url("..//assets/images/female_002.jpg") no-repeat scroll center center;
  background-size: cover;
}

#tinderslide .pane3 .img {
  background: url("..//assets/images/male_001.jpg") no-repeat scroll center center;
  background-size: cover;
}

#tinderslide .pane2 .img {
  background: url("..//assets/images/male_002.jpg") no-repeat scroll center center;
  background-size: cover;
}

#tinderslide .pane1 .img {
  background: url("..//assets/images/male_003.jpg") no-repeat scroll center center;
  background-size: cover;
}

/* jTinder status text */
#status {
  text-align: center;
  font-size: 18px;
  font-family: arial;
  margin-top: 30px;
  font-weight: bold;
}
</style>
