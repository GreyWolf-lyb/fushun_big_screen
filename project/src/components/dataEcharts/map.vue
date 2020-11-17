<template>
  <div class="myChartMap">
    <div ref="myChartMap" id="myChartMap"></div>
    <ul class="map-list">
      <li
        class="map-list-item"
        v-for="(value, key, index) in dataList[activeIndex].value"
        :key="index"
      >
        {{ key }}：{{ value }}万人
      </li>
    </ul>
    <ul class="map-list-time" @mouseenter="enters" @mouseleave="leaver">
      <li
        class="map-list-time-item"
        @click="activeClick(item, index)"
        v-for="(item, index) in dataList"
        :key="index"
      >
        <div
          :class="
            activeIndex === index
              ? 'list-time-item-active active'
              : 'list-time-item-active'
          "
        ></div>
        <div class="list-time-item-text">{{ item.time }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import $ from "jquery";
import echarts from "echarts";
import "echarts-gl";
import uploadedDataURL from "@/assets/city/city.json";
import { fontSize } from "@/utils/storage.js";
export default {
  data() {
    return {
      timer: null,
      activeIndex: 9,
      dataList: [
        {
          time: "2011",
          value: {
            顺城区: 32.6,
            望花区: 34.7,
            新抚区: 33.4,
            东洲区: 28.2,
            抚顺县: 24.5,
            清原县: 25.4,
            新宾县: 22.6,
          },
          num: 201.4,
        },
        {
          time: "2012",
          value: {
            顺城区: 32.4,
            望花区: 34.1,
            新抚区: 33.1,
            东洲区: 29.2,
            抚顺县: 25.3,
            清原县: 25.6,
            新宾县: 23,
          },
          num: 202.7,
        },
        {
          time: "2013",
          value: {
            顺城区: 32.4,
            望花区: 34.8,
            新抚区: 33.1,
            东洲区: 29.2,
            抚顺县: 25.3,
            清原县: 25.4,
            新宾县: 23.3,
          },
          num: 203.5,
        },
        {
          time: "2014",
          value: {
            顺城区: 32.6,
            望花区: 35.1,
            新抚区: 33.8,
            东洲区: 29.6,
            抚顺县: 25.5,
            清原县: 24.5,
            新宾县: 23.1,
          },
          num: 204.2,
        },
        {
          time: "2015",
          value: {
            顺城区: 33,
            望花区: 34,
            新抚区: 35,
            东洲区: 30,
            抚顺县: 26,
            清原县: 25,
            新宾县: 23.5,
          },
          num: 206.5,
        },
        {
          time: "2016",
          value: {
            顺城区: 33.5,
            望花区: 34.8,
            新抚区: 34.8,
            东洲区: 30.8,
            抚顺县: 25.6,
            清原县: 25.2,
            新宾县: 23.1,
          },
          num: 207.8,
        },
        {
          time: "2017",
          value: {
            顺城区: 33.7,
            望花区: 35.2,
            新抚区: 35.1,
            东洲区: 31.2,
            抚顺县: 25.8,
            清原县: 25.4,
            新宾县: 208.7,
          },
          num: 207.8,
        },
        {
          time: "2018",
          value: {
            顺城区: 33.6,
            望花区: 35.4,
            新抚区: 35.3,
            东洲区: 31.4,
            抚顺县: 24.8,
            清原县: 25.4,
            新宾县: 23.7,
          },
          num: 209.6,
        },
        {
          time: "2019",
          value: {
            顺城区: 33.9,
            望花区: 35.6,
            新抚区: 35.5,
            东洲区: 31.7,
            抚顺县: 25.1,
            清原县: 25.5,
            新宾县: 21.2,
          },
          num: 208.5,
        },
        {
          time: "2020",
          value: {
            顺城区: 33.5,
            望花区: 34.8,
            新抚区: 34.8,
            东洲区: 30.8,
            抚顺县: 25.6,
            清原县: 25.2,
            新宾县: 22.6,
          },
          num: 207.3,
        },
      ],
    };
  },
  mounted() {
    this.BigScreenDicRecordArea().then((res) => {
      this.echartsFun(res.data);
    });
    this.setTime();
  },
  methods: {
    // 鼠标移入
    enters() {
      clearInterval(this.timer);
    },
    // 鼠标移出
    leaver() {
      this.setTime();
    },
    setTime() {
      this.timer = setInterval(() => {
        if (this.activeIndex >= 9) {
          this.activeIndex = -1;
        }
        this.activeIndex++;
      }, 2000);
    },
    // 点击
    activeClick(item, num) {
      this.activeIndex = num;
    },
    echartsFun(dataList) {
      let myChart = echarts.init(this.$refs.myChartMap);
      myChart.showLoading();
      // let d = [];
      // for (let i = 0; i < uploadedDataURL.features.length; i++) {
      //   d.push({
      //     name: uploadedDataURL.features[i].properties.name,
      //   });
      // }
      echarts.registerMap("hanzhou", uploadedDataURL);
      myChart.hideLoading();

      var alirl = [
        [
          [121.15, 31.89],
          [109.781327, 39.608266],
        ],
        [
          [120.38, 37.35],
          [122.207216, 29.985295],
        ],
        [
          [123.97, 47.33],
          [120.13, 33.38],
        ],
        [
          [118.87, 42.28],
          [120.33, 36.07],
        ],
        [
          [121.52, 36.89],
          [117.93, 40.97],
        ],
        [
          [102.188043, 38.520089],
          [122.1, 37.5],
        ],
        [
          [118.58, 24.93],
          [101.718637, 26.582347],
        ],
        [
          [120.53, 36.86],
          [121.48, 31.22],
        ],
        [
          [119.46, 35.42],
          [122.05, 37.2],
        ],
        [
          [119.97, 35.88],
          [116.1, 24.55],
        ],
        [
          [121.05, 32.08],
          [112.02, 22.93],
        ],
        [
          [91.11, 29.97],
          [118.1, 24.46],
        ],
      ];
      let option = {
        geo3D: {
          // show: true,
          // zoom: 1,
          map: "hanzhou",
          // roam: true,
          viewControl: {
            center: [0, 15, 30],
            distance: 70, //地图大小
          },
          itemStyle: {
            areaColor: "#0d1d95",
            opacity: 1,
            borderWidth: 0.8,
            borderColor: "rgb(62,215,213)",
          },
          label: {
            show: true,
            textStyle: {
              color: "#fff", //地图初始化区域字体颜色
              fontSize: fontSize(0.12),
              opacity: 1,
              backgroundColor: "rgba(0,0,0,0)",
              //backgroundColor: 'rgba(53,171,199,0)'
            },
          },
          light: {
            //光照阴影
            main: {
              color: "#0d1d95", //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10,
            },
            ambient: {
              intensity: 0.3,
            },
          },
        },
        series: [
          {
            type: "lines3D",
            coordinateSystem: "geo3D",
            // effect: {
            //   show: true,
            //   trailWidth: 4,
            //   trailOpacity: 0.5,
            //   trailLength: 0.3,
            //   constantSpeed: 5,
            // },

            // blendMode: "lighter",

            data: alirl,
          },
        ],
      };
      //渲染地图
      myChart.setOption(option);
    },
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
.map-list {
  position: absolute;
  /* right: 2%;
  top: 5%; */
  top: 2%;
  left: 0;
  display: flex;
  flex-wrap: wrap;
}
.map-list-item {
  color: #fff;
  font-size: 0.8vw;
  line-height: 1.4vw;
  margin-left: 1vw;
}
.map-list-time {
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 90%;
  height: 0.1vw;
  background: #fff;
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.map-list-time-item {
  position: relative;
}
.list-time-item-active {
  width: 0.5vw;
  height: 0.5vw;
  background: #fff;
  margin-top: -0.25vw;
  border-radius: 50%;
}
.list-time-item-text {
  position: absolute;
  left: -1vw;
  top: 0.5vw;
  font-size: 1vw;
}
.active {
  background: red;
}
</style>