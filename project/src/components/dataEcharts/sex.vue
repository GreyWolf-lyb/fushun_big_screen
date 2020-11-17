<template>
  <div ref="sex" id="sex"></div>
</template>
<script>
import echarts from "echarts";
import { fontSize } from "@/utils/storage.js";
export default {
  data() {
    return {
      listData: {
        time: [
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
        ],
        nan: [99.9, 100.4, 97.9, 95.7, 96.8, 97.9, 98, 98.3, 96.3, 93.9],
        nv: [
          101.5,
          102.3,
          105.6,
          108.5,
          109.7,
          109.9,
          110.7,
          111.3,
          112.2,
          113.4,
        ],
      },
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      let myChart = echarts.init(this.$refs.sex);
      myChart.setOption({
        grid: {
          left: "20%",
          right: 5,
        },
        tooltip: {
          trigger: "axis",
          textStyle: {
            fontSize: fontSize(0.12),
          },
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: list.time,
            axisLabel: {
              show: true,
              interval: 0,
              rotate: 40,
              textStyle: {
                color: "#ffffff", //X轴文字颜色
                fontSize: fontSize(0.12),
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "人数（万）",
            min: 50,
            max: 200,
            nameTextStyle: {
              color: "#fff",
              fontSize: fontSize(0.12),
              padding: [-10, 0, 10, 0],
            },
            axisLabel: {
              formatter: "{value} ",
              color: "#ffffff",
              textStyle: {
                fontSize: fontSize(0.12),
              },
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "男",
            type: "line",
            data: list.nan,
            itemStyle: {
              normal: {
                color: "#1b8de9",
                borderWidth: 2,
                borderColor: "#1b8de9",
              },
            },
          },
          {
            name: "女",
            type: "line",
            data: list.nv,
            itemStyle: {
              normal: {
                color: "#7597EB",
                borderWidth: 2,
                borderColor: "#7597EB",
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scope>
#sex {
  @include w_h_size;
}
</style>