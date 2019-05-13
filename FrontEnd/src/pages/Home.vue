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
            <div class="ann_c_t" style="height:20%">
              <div class="ann_c_t_bl">
                <div class="ann_c_t_day">{{ ann_day }}</div>
                <div class="ann_c_t_YM">{{ ann_YM }}</div>
              </div>
            </div>
            <hr style="border:solid 1px;color:#990033;width:60%"/>
            <div class="ann_c_b" style="height:80%">
              <div class="ann_c_b_man" style="height:30%"><b>发布人:</b> {{ ann_anncor }} </div>
              <div class="ann_c_b_detail" style="height:70%"><b>详细内容:</b><br> {{ ann_detail }} </div>
            </div>
          </div>

          <div class="ann_c">
            <div class="ann_c_t" style="height:20%">
              <div class="ann_c_t_bl">
                <div class="ann_c_t_day">{{ ann_day }}</div>
                <div class="ann_c_t_YM">{{ ann_YM }}</div>
              </div>
            </div>
            <hr style="border:solid 1px;color:#990033;width:60%"/>
            <div class="ann_c_b" style="height:80%">
              <div class="ann_c_b_man" style="height:30%"><b>发布人:</b> {{ ann_anncor }} </div>
              <div class="ann_c_b_detail" style="height:70%"><b>详细内容:</b><br> {{ ann_detail }} </div>
            </div>
          </div>

          <div class="ann_c">
            <div class="ann_c_t" style="height:20%">
              <div class="ann_c_t_bl">
                <div class="ann_c_t_day">{{ ann_day }}</div>
                <div class="ann_c_t_YM">{{ ann_YM }}</div>
              </div>
            </div>
            <hr style="border:solid 1px;color:#990033;width:60%"/>
            <div class="ann_c_b" style="height:80%">
              <div class="ann_c_b_man" style="height:30%"><b>发布人:</b> {{ ann_anncor }} </div>
              <div class="ann_c_b_detail" style="height:70%"><b>详细内容:</b><br> {{ ann_detail }} </div>
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
      <div class="act_body" style="padding-left:100px;padding-right:100px;">
        <div class="act_b_card">
          <div class="act_pic"><img src="../assets/activity_icon1.png" style="width:45px;margin:10px 0 0 10px"></div>
          <div class="act_b_cd">
            <div class="act_detail">
              <p><b>活动名称： </b> {{ act_name }} </p>
              <p><b>活动对象： </b> {{ act_peop }} </p>
              <p><b>活动时间： </b> {{ act_time }} </p>
              <p><b>活动地点： </b> {{ act_place }} </p>
            </div>
            <div class="act_content">
              <p><b>活动介绍：</b></p>
              <p> {{ act_content }} </p>
            </div>
          </div>
        </div>

        <div class="act_b_card">
          <div class="act_pic"><img src="../assets/activity_icon2.png" style="width:45px;margin:10px 0 0 10px"></div>
          <div class="act_b_cd">
            <div class="act_detail">
              <p><b>活动名称： </b> {{ act_name }} </p>
              <p><b>活动对象： </b> {{ act_peop }} </p>
              <p><b>活动时间： </b> {{ act_time }} </p>
              <p><b>活动地点： </b> {{ act_place }} </p>
            </div>
            <div class="act_content">
              <p><b>活动介绍：</b></p>
              <p> {{ act_content }} </p>
            </div>
          </div>
        </div>

        <div class="act_b_card">
          <div class="act_pic"><img src="../assets/activity_icon3.png" style="width:45px;margin:10px 0 0 10px"></div>
          <div class="act_b_cd">
            <div class="act_detail">
              <p><b>活动名称： </b> {{ act_name }} </p>
              <p><b>活动对象： </b> {{ act_peop }} </p>
              <p><b>活动时间： </b> {{ act_time }} </p>
              <p><b>活动地点： </b> {{ act_place }} </p>
            </div>
            <div class="act_content">
              <p><b>活动介绍：</b></p>
              <p> {{ act_content }} </p>
            </div>
          </div>
        </div>

        <div class="act_b_card">
          <div class="act_pic"><img src="../assets/activity_icon4.png" style="width:45px;margin:10px 0 0 10px"></div>
          <div class="act_b_cd">
            <div class="act_detail">
              <p><b>活动名称： </b> {{ act_name }} </p>
              <p><b>活动对象： </b> {{ act_peop }} </p>
              <p><b>活动时间： </b> {{ act_time }} </p>
              <p><b>活动地点： </b> {{ act_place }} </p>
            </div>
            <div class="act_content">
              <p><b>活动介绍：</b></p>
              <p> {{ act_content }} </p>
            </div>
          </div>
        </div>
      </div>
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
      ann_day: 25,
      ann_YM: '2019-04',
      ann_anncor: '发布人001',
      ann_detail: "这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。",
      act_name: 'hackthon',
      act_peop: '各大高校学生',
      act_time: '2019.04~~2019.05',
      act_place: '南京大学软件学院',
      act_content: '这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。',
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
  mounted: function() {
    this.getActivity();
  },
  methods: {
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
  }
  .ann_c {
    width: 270px;
    height: 450px;
    float: left;
    width: 33%;
  }
  .ann_c_t_bl {
    text-align: center;
    margin: 0 auto;
    height:50px;
    width:60px;
    
  }
  .ann_c_t_day {
    height: 60%;
    text-align: center;
    padding-top: 10px;
    color: white;
    font-weight: bold;
    background-color: #990033;
  }
  .ann_c_t_YM {
    height: 40%;
    text-align: center;
    font-size: 12px;
    padding-top: 8px;
    color: #990033;
    border:1px solid;
    border-color: #990033;
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
    height: 760px;
  }
  .act_title{
    margin-top: 0; 
    height: 140px;
  }
  .act_body {
  }
  .act_b_card {
    float: left;
    width: 45%;
    height: 210px;
    margin: 10px 30px 60px 30px;
    /* padding: 10px; */
  }
  .act_pic {
    position:absolute;
    margin-left: 0px;
    background-color:#F96A0F;
    width: 60px;
    height: 60px;
    line-height: 20px;
    border-radius: 3px 17px 3px 17px;
    border: 1px solid rgba(187, 187, 187, 1);
  }
  .act_b_cd {
    height: 200px;
    margin-left: 20px;
    margin-top: 10px;
    background-color: white;
    border: 1px solid;
    border-color: #F96A0F;
    border-radius: 0 0 20px 0;
  }
  .act_detail {
    float: left;
    width:40%;
    padding-left: 50px;
    padding-top: 10px;
    font-size: 16px;
  }
  .act_content {
    float: left;
    width: 50%;
    padding-left: 5px;
    padding-top: 10px;
  }
</style>
