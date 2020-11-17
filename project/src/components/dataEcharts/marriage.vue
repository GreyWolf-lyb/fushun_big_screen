<template>
  <div ref="marriage" id="marriage"></div>
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
        marry: [70.7, 71.6, 72.5, 73.3, 74.1, 75.8, 76.9, 77.2, 78.4, 79.6],
        divorce: [40.8, 41.9, 42.2, 43.5, 44.4, 45.6, 46.3, 47.1, 48.2, 49.4],
      },
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      let myChart = echarts.init(this.$refs.marriage);
      myChart.setOption({
        grid: {
          left: "12%",
          right: "12%",
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
          data: [
            {
              name: "结婚率",
              icon: "line",
              textStyle: { fontWeight: "bold", color: "#fff" },
            },
            {
              name: "离婚率",
              icon: "line",
              textStyle: { fontWeight: "bold", color: "#fff" },
            },
          ],
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
            // name: "结婚率",
            min: 20,
            max: 150,
            nameTextStyle: {
              color: "#fff",
              fontSize: fontSize(0.12),
              padding: [-10, 20, 10, -20],
            },
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
            // name: "离婚率",
            min: 20,
            max: 150,
            nameTextStyle: {
              color: "#fff",
              fontSize: fontSize(0.12),
              padding: [-10, -20, 10, 20],
            },
            axisLabel: {
              show: false,
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
        ],
        series: [
          {
            name: "结婚率",
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
            data: list.marry,
          },
          {
            name: "离婚率",
            type: "line",
            yAxisIndex: 1,
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
            data: list.divorce,
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scope>
#marriage {
  @include w_h_size;
}
</style>