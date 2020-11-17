<template>
  <div class="login-page">
    <div class="form-box">
      <div class="log-img">
        <div class="img-img"></div>
        <div class="title-text">抚顺政务大数据分析系统</div>
      </div>
      <div class="input-box">
        <div class="user-input">
          <input type="text" v-model="name" placeholder="输入用户名" />
        </div>
        <div class="pwd-input">
          <input type="password" v-model="pwd" placeholder="输入密码" />
        </div>
        <div class="btn-input" @click="submit">登 录</div>
      </div>
    </div>
  </div>
</template>
<script>
import md5 from "md5";
export default {
  data() {
    return {
      name: "",
      pwd: "",
    };
  },
  methods: {
    submit() {
      //   let data = { id: "admin", pwd: md5("fsdsj") };
      let data = {
        id: this.name,
        pwd: md5(this.pwd),
      };
      if (!this.name && !this.pwd) {
        alert("请输入用户名和密码");
      } else {
        this.$store.dispatch("user/login", data).then((res) => {
          this.$router.push({ path: "/home" });
        });
      }
    },
  },
};
</script>
<style lang="scss" scope>
.login-page {
  @include w_h_size;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/image/login.jpg");
  background-size: 100% 100%;
  .form-box {
    display: flex;
    flex-direction: column;
    .log-img {
      display: flex;
      align-items: center;
      .img-img {
        width: 2.5vw;
        height: 2.3vw;
        background-image: url("../../assets/image/log.png");
        background-size: 100% 100%;
      }
      .title-text {
        font-size: 2vw;
        color: #65f1ff;
        margin-left: 1vw;
      }
    }
    .input-box {
      margin-top: 1vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .user-input,
      .pwd-input {
        margin-top: 1vw;
        width: 20vw;
        height: 3vw;
        background-image: url("../../assets/image/log-inp.png");
        background-size: 100% 100%;
        input {
          display: block;
          width: 100%;
          height: 100%;
          padding: 0 1vw;
          box-sizing: border-box;
          font-size: 1vw;
          color: #fff;
        }
        input::-webkit-input-placeholder {
          font-size: 1vw;
          color: #94a0cd;
        }
      }
      .btn-input {
        margin-top: 1vw;
        width: 20vw;
        height: 3vw;
        background: #203997;
        color: #fff;
        text-align: center;
        line-height: 3vw;
        font-size: 1.2vw;
        cursor: pointer;
      }
    }
  }
}
</style>