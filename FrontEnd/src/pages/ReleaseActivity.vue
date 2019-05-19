<template>
  <div class="domain">
    <div><navi></navi></div>
    <p class="title">发布活动</p>
    <div class="tableContent">
      <div class="tableBody">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="活动名称">
          <el-input v-model="form.name" class="inputbox" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item label="活动海报">
            <el-input v-model="form.name" class="inputbox" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item label="活动主办方">
            <el-input v-model="form.holder" class="inputbox" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="南京大学仙林校区" value="xianlin"></el-option>
              <el-option label="南京大学鼓楼校区" value=“gulou”></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动开始时间">
            <el-col :span="4">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 200px;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">--</el-col>
            <el-col :span="4">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 200px;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="活动结束时间">
            <el-col :span="4">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 200px;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">--</el-col>
            <el-col :span="4">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 200px;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="报名开始时间">
            <el-col :span="4">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 200px; " ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">--</el-col>
            <el-col :span="4">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width:200px;"></el-time-picker>
            </el-col>
          </el-form-item>
            <el-form-item label="报名截止时间">
            <el-col :span="4">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 200px;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="4"></el-col>
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 200px;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="人员限额">
            <el-col :span="4">
              <el-input-number v-model="form.maxnum" aria-placeholder="请输入人数限额"></el-input-number>
            </el-col>
          </el-form-item>
          <el-form-item label="活动类别">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="体育活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="志愿活动" name="type"></el-checkbox>
              <el-checkbox label="学术讲座" name="type"></el-checkbox>

            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="活动简述">
            <el-input type="textarea" v-model="form.desc" style="width: 550px;"></el-input>
          </el-form-item>
          <el-form-item label="活动详述">
            <el-input type="textarea" v-model="form.desc" style="width: 550px; "></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style>
.tableContent{
  margin-left: 400px;
  text-align: left;
  border: 1px chocolate;
}
.title{
  margin-left: 640px;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 2em;
  border: 1em darkmagenta;

}
</style>
<script>
import navi from "../components/navi"
import footter from '../components/footter'

export default {
  name: 'ReleaseActivity',
  components: {navi,footter},
  data() {
    return {
      name: "ReleaseActivity",
      form: {
          name: '',
          holder: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      }
    }
  },
  methods: {
      onSubmit() {
        console.log('submit!');
      }
  }
}
</script>
