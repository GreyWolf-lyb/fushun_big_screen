<template>
  <div ref="CompanyNum" id="CompanyNum"></div>
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
        num: [8.9, 8.8, 9.1, 9.3, 9.6, 9.7, 9.4, 9.8, 9.3, 10],
        proportion: [
          -0.011,
          0.034,
          0.021,
          0.032,
          0.01,
          -0.03,
          0.042,
          -0.051,
          0.075,
        ],
      },
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      // console.log((8.8-8.9)/8.9)
      let myChart = echarts.init(this.$refs.CompanyNum);
      myChart.setOption({
        // grid: {
        //   left: "10%",
        //   right: "10%",
        // },
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
        legend: {
          itemWidth: fontSize(0.12),
          itemHeight: fontSize(0.08),
          data: ["法人单位数", "增长率"],
          textStyle: {
            color: "#fff",
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
              textStyle: {
                color: "white",
                fontSize: fontSize(0.12),
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "数量（万个）",
            min: 5,
            max: 15,
            nameTextStyle: {
              color: "#fff",
              fontSize: fontSize(0.12),
              padding: [-10, 0, 10, 0],
            },
            axisLabel: {
              //   formatter: "{value}",
              textStyle: {
                color: "#fff",
                fontSize: fontSize(0.12),
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },

          {
            type: "value",
            // min: 0,
            // max: 1,
            // interval: 5,
            axisLabel: {
              formatter: "{value} %",
              textStyle: {
                color: "#fff",
                fontSize: fontSize(0.12),
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "法人单位数",
            type: "bar",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#40e9fc",
                  },
                  {
                    offset: 1,
                    color: "#142b55",
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: list.num,
          },
          {
            name: "增长率",
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            symbol: "none",
            lineStyle: {
              color: "red",
              // width: 4,
              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
              // shadowBlur: 15,
              // shadowOffsetY: 20,
            },
            data: list.proportion,
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scope>
#CompanyNum {
  @include w_h_size;
}
</style>