<template>
  <div class="myChartMap">
    <div ref="myChartMap" id="myChartMap"></div>
    <!-- <div class="time-axis">
      <div
        :class="activeIndex===index?'time-but activeStyle':'time-but'"
        @click="tomeBtnClick(index)"
        v-for="(item,index) in timeDate"
        :key="item.text"
      >
        <div v-if="activeIndex===index" class="activeStyle-color"></div>
        <span class="time-but-text">{{item.text}}</span>
      </div>
    </div> -->
  </div>
</template>
<script>
import $ from "jquery";
import echarts from "echarts";
import uploadedDataURL from "@/assets/city/city.json";
import { fontSize } from "@/utils/storage.js";
export default {
  data() {
    return {
      activeIndex: 6,
      timeDate: [
        { text: "2014" },
        { text: "2015" },
        { text: "2016" },
        { text: "2017" },
        { text: "2018" },
        { text: "2019" },
        { text: "2020" },
      ],
    };
  },
  mounted() {
    // year=
    this.BigScreenDicRecordArea().then((res) => {
      // let obj = {
      //   name: [],
      //   value: [],
      // };
      // res.data.forEach((item) => {
      //   obj.name.push(item.Key);
      //   obj.value.push(item.Num);
      // });
      this.echartsFun(res.data);
    });
  },
  methods: {
    tomeBtnClick(num) {
      this.activeIndex += num;
    },
    echartsFun(dataList) {
      let myChart = echarts.init(this.$refs.myChartMap);
      myChart.showLoading();
      let index = -1;
      var timer = setInterval(function () {
        // 隐藏提示框
        myChart.dispatchAction({
          type: "hideTip",
          seriesIndex: 0,
          dataIndex: index,
        });
        // 显示提示框
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: index + 1,
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: index,
        });
        // 高亮指定的数据图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: index + 1,
        });
        index++;
        if (index > 13) {
          index = -1;
        }
      }, 2000);

      // myChart.on("mousemove", function (e) {
      //   clearInterval(timer);
      //   myChart.dispatchAction({
      //     type: "downplay",
      //     seriesIndex: 0,
      //   });
      //   myChart.dispatchAction({
      //     type: "highlight",
      //     seriesIndex: 0,
      //     dataIndex: e.dataIndex,
      //   });
      //   myChart.dispatchAction({
      //     type: "showTip",
      //     seriesIndex: 0,
      //     dataIndex: e.dataIndex,
      //   });
      // });

      // 圆点坐标
      var geoCoordMap = {};
      let d = [];
      // uploadedDataURL.features.forEach((item) => {
      //   // geoCoordMap[item.properties.name] = item.properties.centroid;
      //     d.push({
			//       name:item.properties.name
		  //    })
      // });
      	for( let i=0;i<uploadedDataURL.features.length;i++ ){
          d.push({
            name:uploadedDataURL.features[i].properties.name
          })
        }
      // 将坐标与值对应并反映在地图上
      // var convertData = function (data) {
      //   var res = [];
      //   for (var i = 0; i < data.length; i++) {
      //     var geoCoord = geoCoordMap[data[i].name];
      //     console.log(geoCoord, "==========");
      //     if (geoCoord) {
      //       res.push({
      //         name: data[i].name,
      //         value: geoCoord.concat(data[i].value),
      //       });
      //     }
      //   }
      //   console.log(res, "==============");
      //   return res;
      // };

      echarts.registerMap("hanzhou", uploadedDataURL);
      this.renderMap('hanzhou',d, dataList);
      myChart.hideLoading();
 
 

    },
   renderMap(map,data, dataList){
     console.log(dataList)
    let myChart = echarts.init(this.$refs.myChartMap);
       let option = {
	  //  backgroundColor: '#000', 
    title : {
        text: '',
        subtext: '',
        link: '',
        left: 'center',
        textStyle:{
            color: '#fff',
            fontSize:16,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        },
        subtextStyle:{
        	color: '#fff',
            fontSize:13,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        }
    },
    tooltip: {
        trigger: 'item',
        textStyle:{
						color:'#fff',
						fontSize:30
				},  
        formatter: function(data) {
          let str = ""
          dataList.map(function(v, k){
            if(data.name == v.Key){
               str = data.name + ':' +v.Num + '条'
            } 
          })
          return str;
        }
    },
  
    grid: {
        left: '-8%',
        right: '-8%',
        top: '-8%',
        bottom: '-8%'
    }, 
    animationDuration:1000,
	  animationEasing:'cubicOut',
	  animationDurationUpdate:1000
     
};

    option.series = [ 
		{
            name: map,
            type: 'map',
            mapType: map,
            roam: false,
            zoom: 1.3,
            geoIndex: 1,
            aspectScale: 0.85, //长宽比
            nameMap:{
			},
            label: {
	            normal:{
					show:true,
					textStyle:{
						color:'#fff',
						fontSize:30
					}  
	            },
	            emphasis: {
	                show: true,
	                textStyle:{
						color:'#fff',
						fontSize:30
					}
	            }
	        },
	        itemStyle: {
            normal: {
                areaColor: '#3a7fd5',
                borderColor: '#0a53e9',//线
                shadowColor: '#092f8f',//外发光
                shadowBlur: 20
            },
          emphasis: {
                areaColor: '#0a2dae',//悬浮区背景
            }
        },
            data:data
        }	
    ];
    //渲染地图
    myChart.setOption(option);
}
  },
};
</script>
<style less="scss" scoped>
.myChartMap,
#myChartMap {
  width: 100%;
  height: 100%;
  position: relative;
}
.time-axis {
  position: absolute;
  z-index: 100;
  left: 12%;
  bottom: 10%;
  color: #fff;
  width: 80%;
  height: 10px;
  background: #14367e;
  display: flex;
  justify-content: space-between;
}
.time-but {
  width: 60px;
  height: 60px;
  background: #14367e;
  margin: -25px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}
.activeStyle {
  background: #fff;
  border: 1px solid #fff;
}
.activeStyle-color {
  width: 50px;
  height: 50px;
  border: 5px solid #091541;
  border-radius: 50%;
}
.time-but-text {
  position: absolute;
  left: 0;
  top: 60px;
  color: "#fff";
}
</style>