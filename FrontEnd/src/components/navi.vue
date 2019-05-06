<template>
  <div id="navi" style="width:100%;margin:0; padding:0">
    <el-menu id="menu" :default-active="activeIndex2" class="menu" mode="horizontal" @select="handleSelect" background-color="#fff" text-color="#30465C">
      <el-menu-item index="0"><a href="/"><img src="../assets/mainLogo.png" id="Logo"></a></el-menu-item>

      <el-submenu style="float:right">  
        <template slot="title"><img src="../assets/personalImage.jpg" style="width:50px;margin:5px;"></template>          
        <p style="color: black;text-align:center">用户名，你好!</p>
        <a href='/userSpace' style="text-decoration:none"><el-menu-item index="2-1">用户模式</el-menu-item></a>
        <a href='/Manage' style="text-decoration:none"><el-menu-item index="2-2">管理模式</el-menu-item></a>
        <el-menu-item v-on:click="logout">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item style="float:right;padding:0px"><a href="/"><img src="../assets/inform1.png" style="width:40px"></a></el-menu-item>
      
      <el-menu-item style="float:right"><a href="/Contact" style="text-decoration:none">联系我们</a></el-menu-item>
      <el-menu-item style="float:right"><a href="/Recruit" style="text-decoration:none">招募</a></el-menu-item>
      <el-menu-item style="float:right"><a href="/Notice" style="text-decoration:none">通知</a></el-menu-item>
      <el-menu-item style="float:right"><a href="/Activity" style="text-decoration:none">活动</a></el-menu-item>
      <el-menu-item style="float:right"><a href="/" style="text-decoration:none">主页</a></el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navi',
  // inject:['reload'],
  data() {
    return {
      name: "Name",
    }
  },
  methods: {
    logout: function() {
      alert('退出登录未写');
    }
  }
}
</script>

<style>
  #menu{
    font-weight: bold;
  }
  #menu :hover{
    color: #F7620A;
  }

  #navi {
  }
  #Logo {
    padding-left: 30px;
    width: 150px;
  }
</style>
