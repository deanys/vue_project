<template>
  <div class="login_content">
    <h1>后台管理系统</h1>
    <div class="login_input">
      <el-input
        class="inputContent"
        placeholder="请输入用户名"
        v-model="loginInfo.inputUsername"
        clearable
      >
      </el-input>
      <el-input
        class="inputContent"
        placeholder="请输入密码"
        v-model="loginInfo.inputPasswd"
        show-password
      ></el-input>
      <div class="buttonplace">
        <el-button @click="login" type="primary">登录</el-button>
        <el-button @click="forget" type="info">忘记密码</el-button>
      </div>
      <!-- 数据并没有经行合法性校验，需要更改element ui变成form表单 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginInfo: {
        inputUsername: "",
        inputPasswd: "",
      },
    };
  },
  methods: {
    login: function () {
      let self=this
      this.$http
        .post("http://10.36.147.48:3000/login/login_test/", {
          username: this.loginInfo.inputUsername,
          passwd: this.loginInfo.inputPasswd,
        })
        .then(function (res) {
          console.log(res.data);
          if (res.data.error_num === 0) {
            self.$message.success("登录成功");
            window.sessionStorage.setItem(
              "token",
              res.data.token
            );
            self.$router.push("/home");
          }else{
            self.$message.error("密码错误")
          }
        });
    },
    forget: function () {
      this.$message.error("密码错误");
      this.$router.push("/resigter");
    },
  },
};
</script>

<style lang="less" scoped>
.login_content {
  width: 450px;
  height: 300px;
  background: #555;
  border: 1px solid #e0e0e0;
  box-shadow: 10px 10px 5px #e0e0e0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h1 {
    text-align: center;
    font-size: 24px;
    color: #666;
    height: 60px;
    line-height: 60px;
    margin: 10px auto;
  }
  .login_input {
    display: flex;
    width: 100%;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    .inputContent {
      width: 70%;
      height: 40px;
      margin: 10px;
    }
    button {
      margin-right: 30px;
    }
  }
}
</style>