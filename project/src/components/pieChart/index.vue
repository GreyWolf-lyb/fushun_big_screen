<!--
 * @Author: your name
 * @Date: 2020-09-18 20:36:24
 * @LastEditTime: 2020-09-18 20:55:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VisualScreen\src\components\pieChart\index.vue
-->
<template>
  <div ref="pieChart" id="pieChart"></div>
</template>
<script>
import echarts from "echarts";
import { fontSize } from "@/utils/storage.js";
export default {
  mounted() {
    this.BigScreenSharePropertyType().then((res) => {
      this.defaultData(res.data);
    });
  },
  methods: {
    defaultData(list) {
      let myChart = echarts.init(this.$refs.pieChart);
      let num = 0;
      list.forEach((item) => {
        num += item.Num;
      });
      // 处理数据
      let echartData = [];
      list.forEach((item) => {
        echartData.push({
          value: (((item.Num / num) * 10000) / 100).toFixed(1),
          name: item.Key,
        });
      });

      let formatNumber = function (num) {
        let reg = /(?=(\B)(\d{3})+$)/g;
        return num.toString().replace(reg, ",");
      };
      myChart.setOption({
        color: ["#7b9aff", "#3052ff", "#37d285"],
        series: [
          {
            type: "pie",
            radius: ["30%", "60%"],
            center: ["50%", "60%"],
            data: echartData,
            // hoverAnimation: false,
            labelLine: {
              normal: {
                length: 10,
                length2: 15,
                lineStyle: {
                  color: "#fff",
                },
              },
            },
            label: {
              normal: {
                color: "#fff",
                formatter: (params) => {
                  return (
                    "{value|" +
                    formatNumber(params.value) +
                    "%}" +
                    "\n" +
                    "\n" +
                    "{name|" +
                    params.name +
                    "}"
                  );
                },
                padding: [-15, 0, 0, 0],
                rich: {
                  value: {
                    fontSize: fontSize(0.14),
                    // fontWeight: "bold",
                    color: "#fff",
                  },
                  name: {
                    fontSize: fontSize(0.14),
                    // fontWeight: "bold",
                    color: "#fff",
                  },
                },
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style less="scss" scoped>
#pieChart {
  width: 100%;
  height: 100%;
}
</style>