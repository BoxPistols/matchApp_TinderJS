<template>
<div class="about">

  <!-- content -->
  <div id="content">
    <div class="inner">
      <div class="wrap">
        <div class="cont">

          <h1>
            SignUp!
          </h1>
          <div class="logo">
            <div class="upload">
              <label class="upFile" for="file_photo">

                <SvgCamera />

                <!-- 	＋写真を選択 -->
                <input type="file" id="file_photo" style="display:none;">
              </label>
            </div>
          </div>

          <form action="" class="formArea">
            <div class="input name">
              <input type="text" name="" value="" placeholder="Name">
            </div>

            <div class="signUp">
              <input type="text" name="" value="" placeholder="Creater Name">
            </div>

            <div class="fx_center" style="margin: 30px auto 20px;">

              <div class="selectGroup fx_col" style="margin-right: 15px;">
                <label for="age" class="tex-left">Age</label>
                <select class="minimal" name="age" type="number">
                  <!-- v-model.option="inputOption" -->
                  <option value="年齢" disabled="disabled" selected>年齢を選択</option>
                  <option v-for="n in 100" v-bind:value="n">{{ n }}歳</option>
                </select>
              </div>

              <div class="selectGroup fx_col">
                <label for="age" class="tex-left">Gender</label>
                <select class="minimal" name="">
                  <option value="gender" disabled="disabled" selected>性別を選択</option>
                  <option value="男性">男性</option>
                  <option value="女性">女性</option>
                  <option value="その他">その他</option>
                </select>
              </div>
            </div>

            <div class="fx_center">
              <div class="selectGroup fx_col">
                <label for="genre" class="tex-left">Gender</label>
                <select class="minimal" name="">
                  <option value="genre" disabled="disabled" selected>ジャンルを選択してください</option>
                  <option value="写真">写真</option>
                  <option value="イラスト">イラスト</option>
                  <option value="音楽">音楽</option>
                  <option value="園芸">園芸</option>
                  <option value="文学">文学</option>
                  <option value="演劇">演劇</option>
                  <option value="その他">その他</option>
                </select>
              </div>
            </div>
          </form>
          <!-- /.formArea -->

          <div class="btn cancel tx_center">
            <router-link to="swipe">登録</router-link>
          </div>

          <div class="cancel tx_center">
            <router-link to="/">Cancel</router-link>
          </div>


        </div>
      </div>

    </div><!-- /inner -->
  </div><!-- /content -->

</div>
</template>

<script>
// @ is an alias to /src
import SvgCamera from '@/components/SvgCamera.vue'

export default {
  components: {
    SvgCamera
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

<style lang="sass">
</style>
