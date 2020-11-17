<template>
  <div ref="sexNum" id="sexNum"></div>
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
        num: [
          201.4,
          202.7,
          203.5,
          204.2,
          206.5,
          207.8,
          208.7,
          209.6,
          208.5,
          207.3,
        ],
      },
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      let myChart = echarts.init(this.$refs.sexNum);
      myChart.setOption({
        grid: {
          left: "10%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          textStyle: {
            fontSize: fontSize(0.12),
          },
        },
        legend: {
          show: true,
          itemWidth: fontSize(0.12),
          itemHeight: fontSize(0.08),
          top: fontSize(0.06),
          right: fontSize(1),
          data: ["人口总数量"],
          textStyle: {
            color: "#fff",
            fontSize: fontSize(0.12),
          },
        },
        xAxis: [
          {
            type: "category",
            data: list.time,
            nameTextStyle: {
              color: "#fff",
            },
            axisLine: {
              show: false,
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
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "人数（万）",
            min: 100,
            max: 300,
            nameTextStyle: {
              color: "#fff",
              fontSize: fontSize(0.12),
              padding: [-10, 0, 10, 0],
            },
            axisLabel: {
              left: "0",
              textStyle: {
                color: "#fff",
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
          // {
          //   name: "男性人口数量",
          //   type: "bar",
          //   barWidth: fontSize(0.08),
          //   itemStyle: {
          //     normal: {
          //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //         {
          //           offset: 0,
          //           color: "#f0ae40",
          //         },
          //         {
          //           offset: 1,
          //           color: "#24203e",
          //         },
          //       ]),
          //       opacity: 0.8,
          //     },
          //   },
          //   data: list.nan,
          // },
          // {
          //   name: "女性人口数量",
          //   type: "bar",
          //   barWidth: fontSize(0.08),
          //   itemStyle: {
          //     normal: {
          //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //         {
          //           offset: 0,
          //           color: "#3ef458",
          //         },
          //         {
          //           offset: 1,
          //           color: "#163241",
          //         },
          //       ]),
          //       opacity: 0.8,
          //     },
          //   },
          //   data: list.nv,
          // },
          {
            name: "人口总数量",
            type: "bar",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#3fe4f8",
                  },
                  {
                    offset: 1,
                    color: "#132550",
                  },
                ]),
                opacity: 0.8,
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
<style lang="scss" scope>
#sexNum {
  @include w_h_size;
}
</style>