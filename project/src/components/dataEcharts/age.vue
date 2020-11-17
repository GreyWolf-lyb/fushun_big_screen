<template>
  <div ref="age" id="age"></div>
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
        num: [23.5, 24.7, 25.2, 26.8, 27.7, 28.6, 29.7, 30.2, 31.3, 32.1],
        proportion: [
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
      // 计算比例
      let arrNum = [];
      list.proportion.map((item, index) => {
        arrNum.push((item / list.num[index]).toFixed(2));
      });

      let myChart = echarts.init(this.$refs.age);
      myChart.setOption({
        grid: {
          left: "10%",
          right: "10%",
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
          left: "20%",
          data: ["80岁及以上人口（万人）", "80岁以上人口比重（%，右轴）"],
          textStyle: {
            color: "#fff",
            fontSize: fontSize(0.12),
          },
        },
        xAxis: [
          {
            type: "category",
            // min: 10,
            // max: 40,
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
            name: "人数（万）",
            min: 10,
            max: 40,
            nameTextStyle: {
              color: "#fff",
              fontSize: fontSize(0.12),
              padding: [-10, 0, 10, 0],
            },
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

          {
            type: "value",
            min: 20,
            max: 5,
            axisLabel: {
              formatter: "{value}%",
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
            name: "80岁及以上人口（万人）",
            type: "bar",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#40ebfe",
                  },
                  {
                    offset: 1,
                    color: "#121f4a",
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: list.num,
          },
          {
            name: "80岁以上人口比重（%，右轴）",
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            symbol: "none",
            lineStyle: {
              color: "red",
              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
            },
            data: arrNum,
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scope>
#age {
  @include w_h_size;
}
</style>