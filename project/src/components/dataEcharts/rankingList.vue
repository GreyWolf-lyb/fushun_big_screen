<template>
  <div ref="rankingList" id="rankingList"></div>
</template>
<script>
import echarts from "echarts";
import { fontSize } from "@/utils/storage.js";
export default {
  data() {
    return {
      listData: {
        name: [
          "顺城区",
          "望花区",
          "新抚区",
          "东洲区",
          "抚顺县",
          "清原县",
          "新宾县",
        ],
        num: [450, 500, 550, 350, 60, 50, 40],
      },
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      let myChart = echarts.init(this.$refs.rankingList);
      myChart.setOption({
        grid: {
          left: 1,
          right: 1,
          bottom: -24,
          top: 0,
          containLabel: true,
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: "#fff",
                fontSize: fontSize(0.14),
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: list.name,
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#ffffff",
                fontSize: fontSize(0.14),
              },
              formatter: function (value) {
                return value + "万个";
              },
            },
            data: list.num,
          },
        ],
        series: [
          {
            type: "bar",
            // barGap: "200%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#082658",
                  },
                  {
                    offset: 1,
                    color: "#119ec5",
                  },
                ]),
              },
            },
            barWidth: fontSize(0.06),
            data: [45, 50, 55, 35, 16, 15, 14],
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scope>
#rankingList {
  @include w_h_size;
  height: 120%;
}
</style>