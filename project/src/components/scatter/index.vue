<template>
  <div ref="ScatterPlot" id="ScatterPlot"></div>
</template>
<script>
import echarts from "echarts";
import { fontSize } from "@/utils/storage.js";
export default {
  mounted() {
    this.BigScreenDicRecordOneYear().then((res) => {
      this.defaultData(res.data);
    });
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    defaultData(list) {
      let myChart = echarts.init(this.$refs.ScatterPlot);
      var colorList = [
        [
          "#ff7f50",
          "#87cefa",
          "#da70d6",
          "#32cd32",
          "#6495ed",
          "#ff69b4",
          "#ba55d3",
          "#cd5c5c",
          "#ffa500",
          "#40e0d0",
          "#1e90ff",
          "#ff6347",
          "#7b68ee",
          "#d0648a",
          "#ffd700",
          "#6b8e23",
          "#4ea397",
          "#3cb371",
          "#b8860b",
          "#7bd9a5",
        ],
        [
          "#ff7f50",
          "#87cefa",
          "#da70d6",
          "#32cd32",
          "#6495ed",
          "#ff69b4",
          "#ba55d3",
          "#cd5c5c",
          "#ffa500",
          "#40e0d0",
          "#1e90ff",
          "#ff6347",
          "#7b68ee",
          "#00fa9a",
          "#ffd700",
          "#6b8e23",
          "#ff00ff",
          "#3cb371",
          "#b8860b",
          "#30e0e0",
        ],
        [
          "#929fff",
          "#9de0ff",
          "#ffa897",
          "#af87fe",
          "#7dc3fe",
          "#bb60b2",
          "#433e7c",
          "#f47a75",
          "#009db2",
          "#024b51",
          "#0780cf",
          "#765005",
          "#e75840",
          "#26ccd8",
          "#3685fe",
          "#9977ef",
          "#f5616f",
          "#f7b13f",
          "#f9e264",
          "#50c48f",
        ],
      ][2];
      var dataList = [];
      list.forEach((item, index) => {
        dataList.push({
          name: item.Key,
          value: Math.random().toString().slice(2, 9),
          symbolSize: this.random(50, 150),
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: colorList[index + 1],
              color: colorList[index + 1],
            },
          },
        });
      });
      myChart.setOption({
        tooltip: {
          show: false,
        },
        animationDurationUpdate: function (idx) {
          // 越往后的数据延迟越大
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 200,
              edgeLength: 50,
            },
            roam: true,
            label: {
              normal: {
                show: true,
                fontSize: fontSize(0.16),
              },
            },
            data: dataList,
          },
        ],
      });
    },
  },
};
</script>
<style less="scss" scoped>
#ScatterPlot {
  width: 100%;
  height: 100%;
}
</style>