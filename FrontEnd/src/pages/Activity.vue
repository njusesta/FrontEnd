<template>
  <div class="domain">
    <div class="navigation">
      <navi>
      </navi>
    </div>
    <div class="" style="height:100%;width:100%">
    <el-row class="belownavi"  justify="start" type="flex">
      <el-col :span="15">
          <div class="Activityphotos">
              <el-carousel indicator-position="outside" height="450px">
              <el-carousel-item v-for="item in activitypho.length" :key="item">
                <!-- <img v-bind:src= activitypho[item-1].image style=""> -->
                <img v-bind:src= activitypho[1].image style="">

              </el-carousel-item>
              </el-carousel>
          </div>
      </el-col>
      <el-col :span="9" class="linkdomain">
        <div class="title">活动新闻</div>
        <div class="linkdomain">
        <a href="/Activity/ActivityDetails"><div class="newslink">{{activity[0].detail}}</div></a>
        <a href="/Activity/ActivityDetails"><div class="newslink">{{activity[0].detail}}</div></a>
        <a href="/Activity/ActivityDetails"><div class="newslink">{{activity[0].detail}}</div></a>
        <a href="/Activity/ActivityDetails"><div class="newslink">{{activity[0].detail}}</div></a>
        <a href="/Activity/ActivityDetails"><div class="newslink">{{activity[0].detail}}</div></a>
        <a href="/Activity/ActivityDetails"><div class="newslink">{{activity[0].detail}}</div></a>
        <a href="/Activity/ActivityDetails"><div class="newslink">{{activity[0].detail}}</div></a>
        <a href="/Activity/ActivityDetails"><div class="newslink">{{activity[0].detail}}</div></a>
        <a href="/Activity/ActivityDetails"><div class="newslink">{{activity[0].detail}}</div></a>
        </div>
      </el-col><br>
      
    </el-row>
    </div>
    <div class="actShow">正在报名</div>
    <div class="actCarddiv">
      <el-row>
        <el-col :span="10">
            <div class="activityCard">
              <el-card class="box-card">
                <div slot="header" class="activityname">
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
                <div slot="header" class="activityname">
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
                    <div slot="header" class="activityname">
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
                    <div slot="header" class="activityname">
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
                    <div slot="header" class="activityname">
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
                    <div slot="header" class="activityname">
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
    <div class="demo-image__lazy">
      <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
<!-- 招募详情页（加入项目页）------联系我们-----活动主页------活动发布页------活动详情页（报名） -->
  <footter></footter>
  </div>
</template>

<style>
.linkdomain{
  background-color: rgb(255, 255, 255);

}
.title{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 2px;
}
.belownavi{
  border:1px solid;
  border-color: #990033;
}
.remainnum,.endtime,.maxnum{
  text-align: right
}
.briefintro{
  margin-bottom: 1em;
}
.newslink{
  min-width: 40px;
  width: 100%;
  height: 25px;
  min-height: 20px;
  text-align: left;
  padding: 2% 2% 2% 2%;
}
.actCarddiv{
  margin-left: 150px;
}
.activityCard{
  margin: 0px 10px 0px 80px;
  width: 480px;
  background-color: lightgray;
  border:1px solid;
  border-color: #990033;
}
.blockpager{
  text-align: center;
  background-color: rgb(255, 255, 255);
  margin-top: 0%;
  border-radius: 80px 50px;

}
.activityname{

}
.actShow{
  padding: 10px 5px 30px 5px;
  text-align: center;
  color:#EB7A67;
  font-size: 2em;
  width: 160px;
  height: 20px;
  background-color: rgb(255, 255, 255);
  margin: 20px 670px 50px auto ;
  border-radius: 80px 50px;
  border:1px solid;
  border-color: #990033;
}
.box-card{
  background-color: ghostwhite;
}
.domain{
  margin-left: 0px;
  margin-right: 0px;
  background-color: rgb(255, 255, 255);
}
.el-row {
    margin-bottom: 20px;
  }
 .el-col{
   margin-left: 2px
 }
 /* .Activityphotos{
   width: 60%;
 } */
</style>
<script>
import navi from '../components/navi'
import footter from "../components/footter"

export default {
  name: 'Activity',
  components: {navi,footter},
  data () {
    return {
      name: 'Activity',
      urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
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
        detail:'耿婉莹是猪猪，她不愿意运动hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
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
