<template>
  <div ref="case" id="case"></div>
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
        num: [50, 61, 57, 63, 54, 59, 60, 57, 65, 59],
        proportion: [
          0.22,
          0.065,
          0.105,
          0.142,
          0.092,
          0.016,
          -0.05,
          0.14,
          -0.092,
        ],
      },
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      let myChart = echarts.init(this.$refs.case);
      myChart.setOption({
        grid: {
          left: "20%",
          right: "20%",
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
        legend: {
          itemWidth: fontSize(0.12),
          itemHeight: fontSize(0.08),
          data: ["法人案件数", "同比率"],
          textStyle: {
            color: "#fff",
            fontSize: fontSize(0.12),
          },
        },
        xAxis: [
          {
            type: "category",
            // min: 10,
            // max: 100,
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
        yAxis: [
          {
            type: "value",
            name: "数量（个）",
            nameTextStyle: {
              color: "#fff",
              fontSize: fontSize(0.12),
              padding: [-10, 10, 10, -10],
            },
            axisLabel: {
              formatter: "{value}",
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
            name: "法人案件数",
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
            name: "同比率",
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            symbol: "none",
            lineStyle: {
              color: "red",
              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
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
#case {
  @include w_h_size;
}
</style>