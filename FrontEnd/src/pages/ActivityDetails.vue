<template>
    <el-container>
        <el-header><navi></navi></el-header>
        <el-container>
            <el-aside width="200px">  
                <el-tabs :tab-position="tabPosition" style="height: 200px;">
                    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                </el-tabs>
            </el-aside>
            <el-main><el-image v-for="url in urls" :key="url" :src="url" lazy></el-image></el-main>
            <el-footer>footer</el-footer>
        </el-container>
    </el-container>
</template>
</template>



<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
</style>
<script>
import navi from '../components/navi'

export default {
  name: 'ActivityDetails',
  components: {navi},
  data () {
    return {
        tabPosition: 'left',
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
    }
  },
  mounted: function() {
    this.getActivity();
  }, 
  methods:{
    readDetail() {
      this.$router.push("")
    },
    getActivity() {

      this.$axio.$.get("/activity/list", {
        params:{
          'amount': 4,
        }
      }).then(function(res){
        var actNum = 0;
        res.forEach(activity => {
// activities(array(id(Integer), name(String),startDate(String),endDate(String),limitedNumber(Integer)))
          
        });
      })
    }
  }
}
</script>
