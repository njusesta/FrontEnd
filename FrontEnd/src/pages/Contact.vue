<template>
  <div>
    <navi></navi>
    <img class="pic" src="../assets/联系我们.jpg">
    <div class="main">
    <h1 class="domaintext">联系我们</h1>
    <el-row>
      <el-col class="map" span="12">
        <img src="../assets/Cmap.jpg">
      </el-col>
      <el-col class="info" span="12">
        <h2>南京大学软件学院</h2>
        <p>地址：江苏省南京市栖霞区168号仙林大道</p>
        <p>电话：17826005656</p>
        <p>传真：0086-758-2721222</p>
        <p><em>人事联系人：</em>黄先生，刘先生</p>
        <p>电话：17826005656</p>
        <p>传真：0086-758-2721222</p>
        <p>邮箱：haungguozhao@qq.com</p>
        <br>
        <p>邮编：邮编：526020</p>
      </el-col>
    </el-row>
    </div>


    <footter></footter>
  </div>
  
</template>

<script>
import navi from "../components/navi"
import footter from "../components/footter"
export default {
  name: 'Contact',
  components: {navi,footter},
  data() {
    return {
      name: "",
    }
  },
  methods: {

  }
}
</script>

<style>nn
.pic,.map ,.info{
  height: 400px;
  text-align: center;
  border-right: 1px;
}
.map{
  width: 400px;
  margin-left: 220px;
  margin-top: 30px;
}
.info{
  text-align: left;
  padding-left: 60px;
  float: right;
}
.domaintext{
  font-size: 40px;
  text-align: center;
}
</style>
