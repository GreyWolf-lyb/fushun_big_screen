<template>
  <div ref="household" id="household"></div>
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
        city: [
          134.6,
          135.3,
          135,
          134.9,
          136.4,
          135.9,
          136.1,
          135.8,
          134.3,
          131.6,
        ],
        countryside: [
          66.8,
          67.4,
          68.5,
          69.3,
          70.1,
          71.9,
          72.6,
          73.8,
          74.2,
          75.7,
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
      // 计算城市化率
      let arrNum = [];
      list.city.map((item, index) => {
        arrNum.push(((item / list.num[index]) * 100).toFixed(2));
      });

      let myChart = echarts.init(this.$refs.household);
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
          data: ["城市人口", "农村人口", "城市化率（%）"],
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
            min: 300,
            max: 50,
            nameTextStyle: {
              color: "#fff",
              fontSize: fontSize(0.12),
              padding: [-5, 0, 5, 0],
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
            min: 50,
            max: 200,
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
        ],
        series: [
          {
            name: "城市人口",
            type: "bar",
            stack: "饱和度",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: "#0e40a4",
              },
            },
            data: list.city,
          },
          {
            name: "农村人口",
            type: "bar",
            stack: "饱和度",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: "#709fff",
              },
            },
            data: list.countryside,
          },
          {
            name: "城市化率（%）",
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "red",
                lineStyle: {
                  color: "red",
                  // shadowColor: "#0ab2f5",
                },
              },
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
#household {
  @include w_h_size;
}
</style>