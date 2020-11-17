<template>
  <div ref="death" id="death"></div>
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
        birth: [1.5, 2.4, 3.8, 4.1, 5.2, 6.9, 7.6, 8.7, 9.3, 10.2],
        death: [1.9, 2.4, 3.7, 4.6, 5.3, 6.2, 7.1, 8.5, 9.4, 10.6],
      },
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      let myChart = echarts.init(this.$refs.death);
      myChart.setOption({
        grid: {
          left: "20%",
          right: 5,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
          textStyle: {
            fontSize: fontSize(0.12),
          },
        },
        xAxis: [
          {
            type: "category",
            data: list.time,
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              interval: 0,
              rotate: 40,
              textStyle: {
                color: "white",
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
            // name: "人数（万）",
            // nameTextStyle: {
            //   color: "#fff",
            //   fontSize: fontSize(0.12),
            //   // padding: [10, 0, -10, 0],
            // },
            min: 20,
            max: 0,
            axisLabel: {
              formatter: "{value} %",
              textStyle: {
                color: "#fff",
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

          {
            type: "value",
            min: 20,
            max: 0,
            axisLabel: {
              textStyle: {
                color: "#fff",
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
        series: [
          {
            name: "出生率",
            type: "line",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: "#0ab2f5",
                lineStyle: {
                  color: "#0ab2f5",
                },
              },
            },
            data: list.birth,
          },
          {
            name: "死亡率",
            type: "line",
            // yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: fontSize(0.14),
              },
            },
            itemStyle: {
              normal: {
                color: "#b1333f",
                lineStyle: {
                  color: "#b1333f",
                },
              },
            },
            data: list.death,
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scope>
#death {
  @include w_h_size;
}
</style>