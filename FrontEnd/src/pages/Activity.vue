<template>
<div>
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
    <div class="actShow">活动报名</div>
    <div class="actCarddiv">
      <el-row>
        <el-col :span="10">
            <div class="activityCard">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>{{activity[0].name}}</span>
                  <el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button>
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
                  <el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button>
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
                      <el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button>
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
                      <el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button>
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
                      <el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button>
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
                      <el-button style="float: right; padding: 3px 0;" type="text">活动详情</el-button>
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
    </el-row>
    </div>
  </div>
    <div class="blockpager">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
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
  margin: 0px 30px 0px 80px;
  width: 480px;
}
.blockpager{
  text-align: center
}
.actShow{
  padding: 20px;
  padding-bottom: 50px;
  text-align: center;
  color:#EB7A67;
  font-size: 2em
}
.domain{
  margin-left: 0px;
  margin-right: 0px;
  
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
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
