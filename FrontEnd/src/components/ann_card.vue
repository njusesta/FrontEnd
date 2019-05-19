<template>
  <div class="ann_c">
    <div class="ann_c_t" style="height:20%">
      <div class="ann_c_t_bl">
        <div class="ann_c_t_day">{{ title.ann_day }}</div>
        <div class="ann_c_t_YM">{{ title.ann_YM }}</div>
      </div>
		</div>
		<hr style="border:solid 1px;color:#990033;width:60%"/>
    <div class="ann_c_b" style="height:80%">
      <div class="ann_c_b_man" style="height:30%"><b>发布人:</b> {{ title.ann_anncor }} </div>
      <div class="ann_c_b_detail" style="height:70%"><b>详细内容:</b><br> {{ title.ann_detail }} </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'ann_card',
	props: [
		'title'
	],
  data() {
    return {
        
    }
	},
	mounted: function(){
		// alert(this.$props)
		// console.log(title)
	},
  methods: {
  }
}
</script>

<style>
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
</style>
