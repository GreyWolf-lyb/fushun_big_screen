<template>
  <div ref="credit" id="credit"></div>
</template>
<script>
import echarts from "echarts";
import { fontSize } from "@/utils/storage.js";
export default {
  data() {
    return {
      listData: {
        time: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        lastYear: [500, 540, 500, 450, 460, 400, 301, 293, 280, 150, 160, 140],
        thisYear: [460, 400, 301, 293, 280, 150, 160, 170, 210],
      },
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      let myChart = echarts.init(this.$refs.credit);
      myChart.setOption({
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
          right: fontSize(0.3),
          data: ["去年失信企业数量", "今年失信企业数量"],
          textStyle: {
            color: "RGB(193,223,255)",
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
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "white",
                fontSize: fontSize(0.12),
              },
              //   margin: 20,
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
              padding: [-10, 0, 10, 0],
            },
            axisLabel: {
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
            name: "去年失信企业数量",
            type: "bar",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#33b0ca",
                  },
                  {
                    offset: 1,
                    color: "#121f4b",
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: list.lastYear,
          },
          {
            name: "今年失信企业数量",
            type: "bar",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#b95840",
                  },
                  {
                    offset: 1,
                    color: "#2b1c3e",
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: list.thisYear,
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scope>
#credit {
  @include w_h_size;
}
</style>