<template>
  <div ref="employment" id="employment"></div>
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
        city: [20.1, 21.7, 22.6, 23.4, 24.5, 25.9, 26.1, 27.2, 28.3, 29.1],
        countryside: [
          50.3,
          51.6,
          52.7,
          53.8,
          54.5,
          55.4,
          56.9,
          57.2,
          58.1,
          59.3,
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
      list.city.map((item, index) => {
        arrNum.push(Number((item / list.countryside[index]).toFixed(2)));
      });
      let myChart = echarts.init(this.$refs.employment);
      myChart.setOption({
        // backgroundColor: "#080b30",
        grid: {
          // left: "20%",
          right: "25%",
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
          data: ["外来人口就业", "本市人口就业", "同比率"],
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
            name: "人数（万）",
            min: 20,
            max: 100,
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
          {
            type: "value",
            // name: "同比率(%)",
            // nameTextStyle: {
            //   color: "#fff",
            //   fontSize: fontSize(0.12),
            //   padding: [-10, -20, 10, 20],
            // },
            min: 0,
            max: 10,
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
            name: "外来人口就业",
            type: "bar",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#37c2da",
                  },
                  {
                    offset: 1,
                    color: "#13234e",
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: list.city,
          },
          {
            name: "本市人口就业",
            type: "bar",
            barWidth: fontSize(0.08),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#44f440",
                  },
                  {
                    offset: 1,
                    color: "#14273e",
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: list.countryside,
          },
          {
            name: "同比率",
            type: "line",
            smooth: true,
            symbol: "none",
            yAxisIndex: 1,
            lineStyle: {
              color: "red",
              // shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
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
#employment {
  @include w_h_size;
}
</style>