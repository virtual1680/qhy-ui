<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="index" :index="indexMethod">
    </el-table-column>
    <el-table-column prop="date" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="address" label="姓名" width="180">
      <template slot-scope="scope">
        <!-- feat @focus="eventFocus($event.target.value,scope.$index,'address')"-->
        <el-input :ref="`wc${scope.$index}`" v-model="scope.row.address" @input="onInput" @focus="eventFocus($event.target.value,scope.$index,'address')" @keydown.native="testKeyUp($event,scope.$index,'wc',0)"   placeholder="请输入内容"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="tag" label="地址">
      <template slot-scope="scope">
        <!-- feat @focus="eventFocus($event.target.value,scope.$index,'tag')"-->
        <el-input :ref="`nb${scope.$index}`" v-model="scope.row.tag" @input="onInput" @focus="eventFocus($event.target.value,scope.$index,'tag')" @keydown.native="testKeyUp($event,scope.$index,'nb',1)"   placeholder="请输入内容"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="city" label="地址1">
      <template slot-scope="scope">
        <!-- feat @focus="eventFocus($event.target.value,scope.$index,'city')"-->
        <el-input :ref="`hs${scope.$index}`" v-model="scope.row.city" @input="onInput" @focus="eventFocus($event.target.value,scope.$index,'city')" @keydown.native="testKeyUp($event,scope.$index,'hs',2)"   placeholder="请输入内容"></el-input>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name:'TableKeyCode',
    data() {
      return {
        currentInputIndex:null, //feat
        currentInputValue:null, //feat
        currentInputKey:null, //feat
        izKeyUp:false, //feat
        keyboard:[],
        tabelLength:0,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普',
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
      //feat
      onInput(value){
        console.log(value,this.currentInputValue);
        if (this.currentInputValue) {
          let val = this.currentInputValue;
          this.tableData[this.currentInputIndex][this.currentInputKey] =  this.replaceDiff(value,val);
          this.currentInputValue = null;
        }
      },
      //feat
      replaceDiff(newV,oldV){
        if (oldV && oldV) {
          let oArr = oldV.split('');
          let nArr = newV.split('');
          let val = [];
          nArr.forEach((item, index) =>{
            if (oArr[index]) {
              if (oArr[index] !== item) {
                val.push(item)
              }
            }else{
              val.push(item)
            }
          });
          let oArr1 = oArr.slice((nArr.length-val.length));
          if (oArr1.length > 0) {
            let nArr1 = val.slice(0,-(oArr1.length));
            return nArr1.join('')
          }else{
            return val.join('')
          }
        }
      },
      //feat
      eventFocus(value,index,key){
        this.$nextTick(function(){
          if (this.izKeyUp) {
            this.currentInputIndex = index;
            this.currentInputKey = key;
            this.currentInputValue = value;
            // this.tableData[index][key] = value
          }
        })
      },
      testKeyUp(e,index,type,col){
        this.izKeyUp = false; //feat
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
        /** 上 */
        if (e.keyCode === 38 && index !== 0) {
          this.$refs[`${type}${index-1}`].focus();
          this.izKeyUp = true; //feat
        }
        /** 下 */
        if (e.keyCode === 40 || e.keyCode === 13) {
          if (index < this.tabelLength-1) {
            this.$refs[`${type}${index+1}`].focus();
            this.izKeyUp = true; //feat
          }
        }
        /** 右 */
        if (e.keyCode === 39 && col < (colKey.length-1)) {
          this.$refs[`${colKey[col+1]}${index}`].focus();
          this.izKeyUp = true; //feat
        }
        /** 左 */
        if (e.keyCode === 37 && col !== 0) {
            this.$refs[`${colKey[col-1]}${index}`].focus();
          this.izKeyUp = true; //feat
        }




      },
      indexMethod(index) {
        return index * 2;
      }
    }
  };
</script>
