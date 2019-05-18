<style>
  .el-container {
    height: 800px;
  }
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 100px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-col {
    width: 100%;
    /* height: 100%; */
  }
  .col_title {
    font: bold;
    font-size: 20px;
    margin: 0 auto;
    text-align: center;
  }

</style>

<template>
  <div>
    <navi></navi>

    <div class="Caro">
      <el-row class="belownavi">
        <el-col :span="24">
          <div class="Activityphotos">
              <el-carousel indicator-position="outside" height="450px">
              <el-carousel-item v-for="item in activitypho.length" :key="item">
                <img v-bind:src= activitypho[item-1].image style="">
              </el-carousel-item>
              </el-carousel>
            </div>
        </el-col>
      </el-row>
    </div>

    <el-container>
      <el-aside>
        <p class="col_title">活动类别</p>

        <el-col>
        
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">

            <el-submenu index="0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航0</span>
              </template>

              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>

            </el-submenu>
            
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>


          </el-menu>
        </el-col>
      </el-aside>
      
      <el-main>
        <div v-for="i in rec_data.length" :key="i">
          <div v-if="true"
               v-show="rec_data[i-1].state">
            <el-card class="card">
              <div><img src='../assets/girl.jpg' style="width:100px;height:100px;position:relative;left:5px;top:-10px;" class="picbox" alt="User_pic"></div>
            </el-card>

          </div>
        </div>

      </el-main>
    </el-container>



    
    <footter></footter>
  </div>
</template>

<script>
import navi from "../components/navi"
import footter from "../components/footter"
export default {
  name: 'Recruit',
  components: {navi,footter},
  data() {
    return {
      name: "",
      activitypho: [{
        description: '',
        image: require('../assets/girl.jpg')},
      {
        description: '',
        image: require('../assets/2.jpg')},
       {
         description: '',
         image: require('../assets/girl2.jpg')},
       {
         description: '',
         image: require('../assets/map.jpg')}
      ],
    }
  },
  methods: {
      // 子导航栏开提示
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      // 子导航栏关提示
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
