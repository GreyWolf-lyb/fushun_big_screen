<!--
 * @Author: your name
 * @Date: 2020-09-19 02:32:07
 * @LastEditTime: 2020-09-19 03:12:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VisualScreens\src\components\barChart\songTopTwo.vue
-->
<template>
  <div ref="song" id="songss"></div>
</template>
<script>
import echarts from "echarts";
import { fontSize } from "@/utils/storage.js";
export default {
  mounted() {
    this.BigScreenDicRecordTop10().then((res) => {
      this.defaultData(res.data.dicRecordsIsOkLineChart);
    });
  },
  methods: {
    defaultData(list) {
      let myChart = echarts.init(this.$refs.song);

      myChart.setOption({
        grid: {
          left: "10%",
          right: "10%",
          bottom: "10%",
          top: "30%",
          containLabel: true,
        },
        xAxis: {
          data: list.name,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#fff",
              fontSize: fontSize(0.12),
            },
          },
        },
        yAxis: [
          {
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "pictorialBar",
            // barCategoryGap: "10%",
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            barWidth: 40,
            label: {
              show: true,
              position: "top",
              distance: 12,
              color: "#fff",
              fontSize: fontSize(0.15),
            },
            itemStyle: {
              normal: {
                color: "#2299ff",
              },
            },
            data: list.num,
          },
        ],
      });
    },
  },
};
</script>
<style less="scss" scoped>
#songss {
  width: 100%;
  height: 100%;
}
</style>