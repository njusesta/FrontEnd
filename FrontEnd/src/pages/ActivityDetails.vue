<template>
    <el-container>
        <el-header><navi></navi></el-header>
        <el-container>
            <el-aside width="200px">
            </el-aside>
            <el-main>Main</el-main>
            <el-footer>footer</el-footer>
        </el-container>
    </el-container>
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
