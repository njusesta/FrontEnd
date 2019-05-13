<template>
  <div class="domain">
    <navi></navi>
    <p>活动详情</p>
    <div class="table">
      <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动主办方">
    <el-input v-model="form.holder"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="报名开始时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
    <el-form-item label="报名截止时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="人员限额">
    <el-col :span="11">
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
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item label="活动详述">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
    
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </div>
  </div>
</template>

<script>
import navi from "../components/navi"
export default {
  name: 'ReleaseActivity',
  components: {navi},
  data() {
    return {
      name: "ReleaseActivity",


    }
  },
  methods: {

  }
}
</script>

<style>

</style>