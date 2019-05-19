<template>
  <div >
      <div class="domian">
        <navi></navi>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </div>
      <footter></footter>
  </div>
</template>

<style>
</style>
<script>
import navi from '../components/navi'
import footter from '../components/footter'

export default {
  name: 'ActivityDetails',
  components: {navi,footter},
  data () {
    return {
        tabPosition: 'center',
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
