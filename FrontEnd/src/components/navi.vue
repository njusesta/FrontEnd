<template>
  <div id="navi" style="width:100%; padding:0">
    <el-menu :default-active="activeIndex2" class="menu" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="0"><a href="/"><img src="../assets/logo.png" id="Logo"></a></el-menu-item>

      <el-menu-item index="1"><a href="/" style="text-decoration:none">主页</a></el-menu-item>
      <el-menu-item index="2"><a href="/Activity" style="text-decoration:none">活动</a></el-menu-item>
      <el-menu-item index="3"><a href="/Notice" style="text-decoration:none">通知</a></el-menu-item>
      <el-menu-item index="4"><a href="/Recruit" style="text-decoration:none">招募</a></el-menu-item>
      <el-menu-item index="5"><a href="/Contact" style="text-decoration:none">联系我们</a></el-menu-item>
      
      <el-submenu style="float:right">
        <template slot="title">个人中心</template>
        <a href='/userSpace' style="text-decoration:none"><el-menu-item index="2-1">用户模式</el-menu-item></a>
        <a href='/Manage' style="text-decoration:none"><el-menu-item index="2-2">管理模式</el-menu-item></a>
        <el-menu-item v-on:click="logout">退出登录</el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>

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
  .menu{
    
  }
</style>
