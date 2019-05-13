<template>
  <div class="domain">
    <div class="navigation">
      <navi>
      </navi>
    </div>
    <div>
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
    <div class="actShow">正在报名</div>
    <div class="actCarddiv">
      <el-row>
        <el-col :span="10">
            <div class="activityCard">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>{{activity[0].name}}</span>
                 <a href="/Activity/ActivityDetails"><el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button></a>
                </div>
                <div>
                  <div class="briefintro">
                    <span>{{'活动简述：'+activity[0].detail}}</span><br>
                  </div>
                  <span>{{'活动类别'+activity[0].cateogory}}</span><br>
                  <span>{{'主办方：'+activity[0].holder}}</span><br>
                  <span class="maxnum">{{'人员限额：'+activity[0].maxnum}}</span><br>
                  <span class="remainnum">{{'剩余名额: '+activity[0].remainnum}}</span><br>
                  <span>{{'开始报名时间:'+activity[0].beginbaomTime}}</span>
                  <span class="endtime">{{'结束报名时间:'+activity[0].endbaomTime}}</span><br>
                </div>
              </el-card>
            </div>
        </el-col>
        <el-col :span="10">
            <div class="activityCard">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>{{activity[0].name}}</span>
                 <a href="/Activity/ActivityDetails"><el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button></a>
                </div>
                <div>
                  <div class="briefintro">
                    <span>{{'活动简述：'+activity[0].detail}}</span><br>
                  </div>
                  <span>{{'活动类别'+activity[0].cateogory}}</span><br>
                  <span>{{'主办方：'+activity[0].holder}}</span><br>
                  <span class="maxnum">{{'人员限额：'+activity[0].maxnum}}</span><br>
                  <span class="remainnum">{{'剩余名额: '+activity[0].remainnum}}</span><br>
                  <span>{{'开始报名时间:'+activity[0].beginbaomTime}}</span>
                  <span class="endtime">{{'结束报名时间:'+activity[0].endbaomTime}}</span><br>
                </div>
              </el-card>
            </div>
        </el-col>
      </el-row>
      <el-row>
        <el-row>
          <el-col :span="10">
                <div class="activityCard">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>{{activity[0].name}}</span>
                 <a href="/Activity/ActivityDetails"><el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button></a>
                    </div>
                    <div>
                      <div class="briefintro">
                        <span>{{'活动简述：'+activity[0].detail}}</span><br>
                      </div>
                      <span>{{'活动类别: '+activity[0].cateogory}}</span><br>
                      <span>{{'主办方：'+activity[0].holder}}</span><br>
                      <span class="maxnum">{{'人员限额：'+activity[0].maxnum}}</span><br>
                      <span class="remainnum">{{'剩余名额: '+activity[0].remainnum}}</span><br>
                      <span>{{'开始报名时间:'+activity[0].beginbaomTime}}</span>
                      <span class="endtime">{{'结束报名时间:'+activity[0].endbaomTime}}</span><br>
                    </div>
                  </el-card>
                </div>
          </el-col>
          <el-col :span="10">
                <div class="activityCard">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>{{activity[0].name}}</span>
                 <a href="/Activity/ActivityDetails"><el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button></a>
                    </div>
                    <div>
                      <div class="briefintro">
                        <span>{{'活动简述：'+activity[0].detail}}</span><br>
                      </div>
                      <span>{{'活动类别'+activity[0].cateogory}}</span><br>
                      <span>{{'主办方：'+activity[0].holder}}</span><br>
                      <span class="maxnum">{{'人员限额：'+activity[0].maxnum}}</span><br>
                      <span class="remainnum">{{'剩余名额: '+activity[0].remainnum}}</span><br>
                      <span>{{'开始报名时间:'+activity[0].beginbaomTime}}</span>
                      <span class="endtime">{{'结束报名时间:'+activity[0].endbaomTime}}</span><br>
                    </div>
                  </el-card>
                </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
                <div class="activityCard">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>{{activity[0].name}}</span>
                 <a href="/Activity/ActivityDetails"><el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button></a>
                    </div>
                    <div>
                      <div class="briefintro">
                        <span>{{'活动简述：'+activity[0].detail}}</span><br>
                      </div>
                      <span>{{'活动类别: '+activity[0].cateogory}}</span><br>
                      <span>{{'主办方：'+activity[0].holder}}</span><br>
                      <span class="maxnum">{{'人员限额：'+activity[0].maxnum}}</span><br>
                      <span class="remainnum">{{'剩余名额: '+activity[0].remainnum}}</span><br>
                      <span>{{'开始报名时间:'+activity[0].beginbaomTime}}</span>
                      <span class="endtime">{{'结束报名时间:'+activity[0].endbaomTime}}</span><br>
                    </div>
                  </el-card>
                </div>
          </el-col>
          <el-col :span="10">
                <div class="activityCard">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>{{activity[0].name}}</span>
                 <a href="/Activity/ActivityDetails"><el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button></a>
                    </div>
                    <div>
                      <div class="briefintro">
                        <span>{{'活动简述：'+activity[0].detail}}</span><br>
                      </div>
                      <span>{{'活动类别'+activity[0].cateogory}}</span><br>
                      <span>{{'主办方：'+activity[0].holder}}</span><br>
                      <span class="maxnum">{{'人员限额：'+activity[0].maxnum}}</span><br>
                      <span class="remainnum">{{'剩余名额: '+activity[0].remainnum}}</span><br>
                      <span>{{'开始报名时间:'+activity[0].beginbaomTime}}</span>
                      <span class="endtime">{{'结束报名时间:'+activity[0].endbaomTime}}</span><br>
                    </div>
                  </el-card>
                </div>
          </el-col>
        </el-row></el-row>
    </div>
    <div class="blockpager">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    <div class=""></div>
<!-- 招募详情页（加入项目页）------联系我们-----活动主页------活动发布页------活动详情页（报名） -->
  </div>
</template>

<style>
.remainnum,.endtime,.maxnum{
  text-align: right
}
.briefintro{
  margin-bottom: 1em;
}
.actCarddiv{
  margin-left: 150px;
}
.activityCard{
  margin: 0px 10px 0px 80px;
  width: 480px;
  background-color: lightgray
}
.blockpager{
  text-align: center;
  background-color: #D1D0AA;
  margin-top: 0%;
  border-radius: 80px 50px;

}
.actShow{
  padding: 10px 5px 30px 5px;
  text-align: center;
  color:#EB7A67;
  font-size: 2em;
  width: 160px;
  height: 20px;
  background-color: rgb(233, 233, 240);
  margin: 0px 670px 50px auto ;
  border-radius: 80px 50px;
}
.box-card{
  background-color: ghostwhite;
}
.domain{
  margin-left: 0px;
  margin-right: 0px;
  background-color: #D1D0AA;
}
.el-row {
    margin-bottom: 20px;
  }
 .el-col{
   margin-left: 2px
 }
</style>
<script>
import navi from '../components/navi'
export default {
  name: 'Activity',
  components: {navi},
  data () {
    return {
      name: 'Activity',

      activitypho: [{
        description: '',
        image: require('../assets/girl.jpg')
      },
      {
        description: '',
        image: require('../assets/2.jpg')

      },
      {
        description: '',
        image: require('../assets/girl2.jpg')
      },
      {
        description: '',
        image: require('../assets/map.jpg')
      }
      ],
      activity:[{
        maxnum:'50',
        remainnum:'20',
        holder:'许竣博和耿婉莹',
        name:'耿婉莹夏季运动会',
        pic:require('../assets/2.jpg'),
        beginbaomTime:'2019.4.27',
        endbaomTime:'2019.5.1',
        detail:'耿婉莹是猪猪，她不愿意运动',
        cateogory:'体育活动',
        valid:'true'
        },
        {
          
        briefintro:'南京大学软件学院夏季运动会',
        pic:require('../assets/2.jpg'),
        beginbaomTime:'2019.4.27',
        endbaomTime:'2019.5.1',
        detail:'ihsidddddddddddddddddddddddddddddddddd',
        cateogory:'体育活动',
        valid:'true'
        },
        {
        briefintro:'南京大学软件学院夏季运动会',
        pic:require('../assets/2.jpg'),
        beginbaomTime:'2019.4.27',
        endbaomTime:'2019.5.1',
        detail:'ihsidddddddddddddddddddddddddddddddddd',
        cateogory:'体育活动',
        valid:'true'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
