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

            <div class="fx_center">
              <div class="selectGroup fx_col">
                <label for="age" class="tex-left">Age</label>
                <select class="minimal" name="age">
                  <option value="年齢" disabled="disabled" selected>年齢を選択</option>
                  <% for (var i = 18 - 1; i <= 99; i++) { %>
                  <option value="<%= i+1 %>">
                    <%= i+1 %>歳</option>
                  <% } %>
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
                  <option value="音楽">音楽</option>
                  <option value="園芸">園芸</option>
                  <option value="その他">その他</option>
                </select>
              </div>
            </div>
          </form>
          <!-- /.formArea -->

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
  }
}
</script>

<style lang="sass">
</style>
