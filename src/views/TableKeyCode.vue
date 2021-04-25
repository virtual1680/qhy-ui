<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="index" :index="indexMethod">
    </el-table-column>
    <el-table-column prop="date" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
      <template slot-scope="scope">
        <el-input :ref="`wc${scope.$index}`" @keydown.native="testKeyUp($event,scope.$index,'wc',0)" v-model="scope.row.address"  placeholder="请输入内容"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="地址">
      <template slot-scope="scope">
        <el-input :ref="`nb${scope.$index}`" @keydown.native="testKeyUp($event,scope.$index,'nb',1)" v-model="scope.row.address"  placeholder="请输入内容"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="地址1">
      <template slot-scope="scope">
        <el-input :ref="`hs${scope.$index}`" @keydown.native="testKeyUp($event,scope.$index,'hs',2)" v-model="scope.row.address"  placeholder="请输入内容"></el-input>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name:'TableKeyCode',
    data() {
      return {
        keyboard:[],
        tabelLength:0,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司'
        }],

      }
    },
    created () {
      this.tabelLength = this.tableData.length
    },
    methods: {
      loadData(){
        //请求数据 然后将数据个数赋值给tabelLength
        // this.tabelLength = res.data.length
      },

      testKeyUp(e,index,type,col){
        console.log(e);
        if (this.keyboard[0] === 17) {
          if (e.keyCode === 13) {
            console.log("执行提交事件");
          }
          this.keyboard = [];
          return false
        } else if (e.keyCode === 17) {
          this.keyboard[0] = e.keyCode
        }

        let colKey = ['wc','nb','hs'];
        console.log(e.keyCode,index < this.tabelLength-1,);
        /** 上 */
        if (e.keyCode === 38 && index !== 0) {
          this.$refs[`${type}${index-1}`].focus();
        }
        /** 下 */
        if (e.keyCode === 40 || e.keyCode === 13) {
          if (index < this.tabelLength-1) {
            this.$refs[`${type}${index+1}`].focus();
          }
        }
        /** 右 */
        if (e.keyCode === 39 && col < (colKey.length-1)) {
            this.$refs[`${colKey[col+1]}${index}`].focus();
        }
        /** 左 */
        if (e.keyCode === 37 && col !== 0) {
            this.$refs[`${colKey[col-1]}${index}`].focus();
        }



      },
      indexMethod(index) {
        return index * 2;
      }
    }
  };
</script>
