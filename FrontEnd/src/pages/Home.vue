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
          <!-- <div class="ann_c">
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
          </div> -->
          <div 
            is="ann_card"
            v-for="ann_item in ann_items"
            v-bind:key="ann_item.ann_anncor"
            v-bind:title="ann_item"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="activity">
      <div class="act_title">
        <h1 style="position: absolute;margin-top:30px;width:100%;text-align:center;color:#F96A0F;">最新活动</h1>
      </div>
      <div class="act_body" style="padding-left:100px;padding-right:100px;">
        <div 
            is="act_card"
            v-for="act_item in act_items"
            v-bind:key="act_item.act_name"
            v-bind:item="act_item"
            >
          </div>
        <!-- <div class="act_b_card">
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
        </div> -->
      </div>
    </div>

    <footter></footter>
  </div>
</template>

<script>
import navi from "../components/navi"
import ann_card from "../components/ann_card"
import act_card from "../components/act_card"
import footter from "../components/footter"
export default {
  name: 'Home',
  components: {navi, footter, ann_card, act_card},
  data() {
    return {
      act_items:[{
        act_name: 'hackthon',
        act_peop: '各大高校学生',
        act_time: '2019.04~~2019.05',
        act_place: '南京大学软件学院',
        act_content: '这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。',
        act_pic: require('../assets/activity_icon1.png')
      },{
        act_name: 'hackthon',
        act_peop: '各大高校学生',
        act_time: '2019.04~~2019.05',
        act_place: '南京大学软件学院',
        act_content: '这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。',
        act_pic: require('../assets/activity_icon2.png')
      },{
        act_name: 'hackthon',
        act_peop: '各大高校学生',
        act_time: '2019.04~~2019.05',
        act_place: '南京大学软件学院',
        act_content: '这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。',
        act_pic: require('../assets/activity_icon3.png')
      },{
        act_name: 'hackthon',
        act_peop: '各大高校学生',
        act_time: '2019.04~~2019.05',
        act_place: '南京大学软件学院',
        act_content: '这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。',
        act_pic: require('../assets/activity_icon4.png')
      }],

      ann_items:[{
        ann_day: 25,
        ann_YM: '2019-04',
        ann_anncor: '发布人001',
        ann_detail: "这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。"
      },{
        ann_day: 25,
        ann_YM: '2019-04',
        ann_anncor: '发布人001',
        ann_detail: "这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。"
      },{
        ann_day: 25,
        ann_YM: '2019-04',
        ann_anncor: '发布人001',
        ann_detail: "这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。这是内容简介。"
      }],

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

    /**
     * 获取活动信息列表
     * activityId: 1,
       name: '',
       kind: '', // match, activity, recruitment其中一种
       startDate: '',
       endDate: '',
       limitedNumber: ''
     */
    getActivity() {

      this.$axio.$.get("/activity/list", {
        params:{
          // 'amount': 4,
        }
      }).then(function(res){
        var actNum = 0;
        
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
  /* .ann_c {
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
  } */


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

</style>
