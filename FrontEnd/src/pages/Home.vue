<template>
  <div class="main">
    <navi></navi>
    <div class="announce">
      <div class="ann_title">
        <h1 style="margin:0px 0 0 20px;padding:0px;text-align:center;color:#EB7A67">最新通知</h1>
      </div>
      <div class="ann_body">
        <div class="ann_body_list">
          <el-button @click="resetDateFilter">清除日期过滤器</el-button>
          <el-button @click="clearFilter">清除所有过滤器</el-button>
          <a href="/Notice"><h2 style="float:right"> >>>>>More </h2></a> 
          <el-table ref="filterTable" :data="tableData" height=240 style="width: 100%;">
            <el-table-column prop="date" label="日期" sortable width="180" column-key="date" 
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler">
            </el-table-column>
            
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="100"
              :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
              :filter-method="filterTag" filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag :type= "scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.tag}}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div class="activity">
      <div class="act_title">
        <h1 style="margin:0px;text-align:center;color:#EB7A67">最新活动</h1>
      </div>
      <div class="act_body">
        <div class="act_body_list">
          <a href="/Activity"><h2 style="float:right"> >>>>>More </h2></a> 
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
            <!-- <el-table-column prop="tag" label="标签" width="100"
              :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
              :filter-method="filterTag" filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag :type= "scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.tag}}</el-tag>
              </template>
            </el-table-column> -->
          </el-table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import navi from "../components/navi"
export default {
  name: 'Home',
  components: {navi},
  data() {
    return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      }
  },
  methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
}
</script>

<style>
  .announce {
    margin-top: 0px;
    width: 100%;
    height: 600px;
  }
  .ann_title{
    background-color:#D1D0AA;
    margin-top: 0; 
    height: 140px;
  }
  .ann_body {
    height: 100%;
    padding: 10px 20px 10px 20px;
  }
  .ann_body_list {
    margin: 20px;
    height: 300px;
    padding:10px;
    border: 2px solid;
    border-color: black;
    border-radius: 10px;
  }

  .activity {
    margin-top: 0px;
    width: 100%;
    height: 600px;
  }
  .act_title{
    background-color:#D1D0AA;
    margin-top: 0; 
    height: 140px;
  }
  .act_body {
    height: 100%;
    padding: 10px 20px 10px 20px;
  }
  .act_body_list {
    margin: 20px;
    height: 300px;
    padding:10px;
    border: 2px solid;
    border-color: black;
    border-radius: 10px;
  }
</style>
