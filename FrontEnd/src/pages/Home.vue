<template>
  <div class="main">
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

    <div class="announce">
      <div class="ann_title">
        <h1 style="position: absolute;margin-top:30px;width:100%;text-align:center;color:#990033;">最新通知</h1>
      </div>
      <div class="ann_body">
        <div class="ann_body_list">          
          <!-- <el-table ref="filterTable" :data="tableData" height=240 style="width: 100%;">
            <el-table-column prop="date" label="日期" sortable width="180" column-key="date" 
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler">
            </el-table-column>
            
            <el-table-column prop="name" label="发布者" width="180">
            </el-table-column>
            
            <el-table-column prop="inform" label="通知概要" :formatter="formatter">
            </el-table-column>

            <el-table-column prop="detail" label="活动详情" :formatter="formatter">
              <el-button  type="primary" @click="readDetail">查看详情</el-button>
            </el-table-column>
          </el-table> -->
          <div class="ann_c">
            <div class="ann_c1_t" style="height:20%">
              <div class="ann_c_t_bl">

              </div>
            </div>
            <div class="ann_c_b" style="height:80%">
              
            </div>
          </div>

          <div class="ann_c">
            <div class="ann_c1_t" style="height:20%">
              <div class="ann_c_t_bl">

              </div>
            </div>
            <div class="ann_c_b" style="height:80%">
              
            </div>
          </div>

          <div class="ann_c">
            <div class="ann_c1_t" style="height:20%">
              <div class="ann_c_t_bl">

              </div>
            </div>
            <div class="ann_c_b" style="height:80%">
              
            </div>
          </div>

          <!-- <a href="/Notice"><h3 style="float:right"> >>>>>More </h3></a>  -->
        </div>
      </div>
    </div>

    <div class="activity">
      <div class="act_title">
        <h1 style="position: absolute;margin-top:30px;width:100%;text-align:center;color:#F96A0F;">最新活动</h1>
      </div>
      <!-- <div class="act_body">
        <div class="act_body_list">
          <el-table ref="filterTable" :data="tableData" height=240 style="width: 100%;">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
              </div>
            </el-card>
          </el-table>

          <a href="/Activity"><h3 style="float:right"> >>>>>More </h3></a> 
        </div>
      </div> -->
    </div>

    <footter></footter>
  </div>
</template>

<script>
import navi from "../components/navi"
import footter from "../components/footter"
export default {
  name: 'Home',
  components: {navi, footter},
  data() {
    return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          inform: '数据科学基础期中考试',
          detail: '通知编号'
        }],
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
        ]
    }
  },
  methods: {
    readDetail() {
      this.$router.push("")
    }
      // resetDateFilter() {
      //   this.$refs.filterTable.clearFilter('date');
      // },
      // clearFilter() {
      //   this.$refs.filterTable.clearFilter();
      // },
      // formatter(row, column) {
      //   return row.address;
      // },
      // filterTag(value, row) {
      //   return row.tag === value;
      // },
      // filterHandler(value, row, column) {
      //   const property = column['property'];
      //   return row[property] === value;
      // }
    }
}
</script>

<style>
  .announce {
    margin-top: 0px;
    width: 100%;
    height: 673px;
  }
  .ann_title{
    margin-top: 30px; 
    height: 140px;
  }
  .ann_body {
    height: 100%;
    /* padding: 10px 20px 10px 20px; */
  }
  .ann_body_list {
    margin-left: 173px;
    margin-right: 173px;
    margin-bottom: 50px;
    height: 100%;
    /* padding:10px; */
    /* border: 2px solid;
    border-color: black;
    border-radius: 10px; */
  }
  .ann_c {
    width: 270px;
    height: 450px;
    float: left;
  }
  .ann_c_t_bl {
    margin-left:105px;
    height:50px;
    width:60px;
    background-color: #990033;
  }
  .ann_c_b {
    margin: 10px;
    padding: 15px;
    border: 1px solid;
    border-color: #990033;
  }


  .activity {
    background-color: #EFEDED;
    margin-top: 0px;
    width: 100%;
    height: 600px;
  }
  .act_title{
    margin-top: 0; 
    height: 140px;
  }
  .act_body {
    height: 100%;
    padding: 10px 20px 10px 20px;
  }
  .act_body_list {
    height: 300px;
    padding:10px;
    border: 2px solid;
    border-color: black;
    border-radius: 10px;
  }
</style>
