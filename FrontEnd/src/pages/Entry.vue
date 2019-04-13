<template>
  <div class="container">
    <img class="logo" src="../assets/logo.png" alt="this is a logo"/>
    <div class="header">
      <p class="title">NJU-SE 学生活动管理系统</p>
    </div>
    <div class="main-box">
      <el-card>
        <h3 style="float: top;" align="center">登录</h3>
        <el-input id="account" class="loginInput" v-model="account" style="margin-top: 6%;" placeholder="请输入邮箱地址"></el-input>
        <el-input id="password" type="password" v-model="password" class="loginInput" style="margin-top: 8%;" align="center" placeholder="请输入密码"></el-input><br>
        <el-row style="width:100%" type="flex" justify="space-between">
          <el-col :span="6"><el-checkbox v-model="remember">记住密码</el-checkbox></el-col>
          <el-col :span="6"><span>忘记密码？</span></el-col>
        </el-row>
        <el-button type="primary" id="login" v-on:click="login()" round>登录</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  data() {
    return {
      account: 123,
      password: 123,
      remember: false,
    }
  },
  methods:{
    login: function(){

    }
  }
  
}
</script>

<style scoped>
  .header{
    width: 60%;
    height: 20%;
    margin:0 auto 0 auto; /*顺序是上右下左*/
    padding-top: 40px;
  }

  .title{
    margin:0;
    color: white;
    font-size: 40px;
    text-align: center;
  }

  .logo{
    position: fixed;
    top: 40px;
    left: 100px;
    width: 60px;
    height: 60px;
  }

  .container{
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url('../assets/background1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .main-box{
    height: 80%;
    width: 30%;
    margin:0 auto 0 auto;
  }

  .loginInput{
    width: 84%;
    margin-left: 8%;
  }

  button{
    width:84%;
    height:40px;
    font-size: 18px;
    margin-left: 8%;
    margin-top: 3%;
  }

</style>
