<template>
  <div ref="song" id="song"></div>
</template>
<script>
import echarts from "echarts";
import { fontSize } from "@/utils/storage.js";
export default {
  mounted() {
    this.BigScreenOpenPropertyIs().then((res) => {
      this.defaultData(res.data);
    });
  },
  methods: {
    defaultData(list) {
      let myChart = echarts.init(this.$refs.song);
      myChart.setOption({
        // backgroundColor: "#091C3D",
        grid: {
          left: "3%",
          right: "3%",
          bottom: "10%",
          top: "20%",
          containLabel: true,
        },
        legend: {
          //图例组件，颜色和名字
          left: "20%",
          top: "5%",
          itemGap: 16,
          itemWidth: 18,
          itemHeight: 10,
          data: [
            {
              name: "向社会开放情况",
            },
            {
              name: "不向社会开放情况",
            },
          ],
          textStyle: {
            color: "#fff",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: fontSize(0.12),
          },
        },
        xAxis: [
          {
            type: "category",
            data: list.name,
            axisLabel: {
              interval: 0,
              // rotate: 20,
              padding: [5, 0, 0, 0],
              textStyle: {
                fontSize: fontSize(0.12),
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
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
            splitNumber: 5,
            axisLabel: {
              show: false,
              textStyle: {
                color: "#fff",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
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
              lineStyle: {
                color: ["#fff"],
                opacity: 0.06,
              },
            },
          },
        ],
        series: [
          {
            name: "向社会开放情况",
            type: "bar",
            data: list.openNumIs,
            barWidth: 0,
            barGap: 0, //柱间距离
            label: {
              //图形上的文本标签
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "#fff",
                  fontStyle: "normal",
                  fontFamily: "微软雅黑",
                  fontSize: fontSize(0.12),
                },
              },
            },
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#eb6161",
                  },
                  {
                    offset: 1,
                    color: "#eb6161",
                  },
                ]),
                barBorderRadius: 0,
                borderWidth: 0,
              },
            },
          },
          {
            name: "不向社会开放情况",
            type: "bar",
            data: list.openNumNot,
            barWidth: 0,
            barGap: 0, //柱间距离
            label: {
              //图形上的文本标签
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "#fff",
                  fontStyle: "normal",
                  fontFamily: "微软雅黑",
                  fontSize: fontSize(0.12),
                },
              },
            },
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#2299ff",
                  },
                  {
                    offset: 1,
                    color: "#2299ff",
                  },
                ]),
                barBorderRadius: 0,
                borderWidth: 0,
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style less="scss" scoped>
#song {
  width: 100%;
  height: 100%;
}
</style>