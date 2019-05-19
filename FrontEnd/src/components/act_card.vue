<template>
<div class="act_b_card">
  <div class="act_pic"><img :src="pic" style="width:45px;margin:10px 0 0 10px"></div>
    <div class="act_b_cd">
      <div class="act_detail">
        <p><b>活动名称： </b> {{ item.act_name }} </p>
        <p><b>活动对象： </b> {{ item.act_peop }} </p>
        <p><b>活动时间： </b> {{ item.act_time }} </p>
        <p><b>活动地点： </b> {{ item.act_place }} </p>
      </div>
      <div class="act_content">
      <p><b>活动介绍：</b></p>
      <p> {{ item.act_content }} </p>
      </div>
    </div>
  </div>
</template>

<script>
// import 
export default {
	name: 'act_card',
	props: [
		'item'
	],
  data() {
    return {
      pic: this.$props.item.act_pic
    }
	},
	mounted: function(){
		// console.log(this.$props.item.act_pic)
		// console.log(title)
	},
  methods: {
  }
}
</script>

<style>
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
