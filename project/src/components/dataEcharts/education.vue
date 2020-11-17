<template>
  <div ref="education" id="education"></div>
</template>
<script>
import echarts from "echarts";
import { fontSize } from "@/utils/storage.js";
export default {
  data() {
    return {
      listData: [
        { value: 39, name: "小学" },
        { value: 98.1, name: "初中" },
        { value: 37.7, name: "高中（含中专）" },
        { value: 25.6, name: "大专以上" },
        { value: 6.9, name: "文盲人口" },
      ],
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      let myChart = echarts.init(this.$refs.education);
      let color = ["#2f60e5", "#fff94e", "#ff6166", "#09e678", "#afafaf"];
      myChart.setOption({
        color: color,
        tooltip: {
          trigger: "item",
          borderColor: "rgba(255,255,255,.3)",
          backgroundColor: "rgba(13,5,30,.6)",
          borderWidth: 1,
          padding: 5,
          textStyle: {
            fontSize: fontSize(0.12),
          },
          formatter: function (parms) {
            var str =
              parms.marker +
              "" +
              parms.data.name +
              "</br>" +
              "数量：" +
              parms.data.value +
              "万人</br>" +
              "占比：" +
              parms.percent +
              "%";
            return str;
          },
        },
        series: [
          {
            type: "pie",
            radius: ["45%", "60%"],
            center: ["50%", "50%"],
            minAngle: 50,
            data: list,
            // hoverAnimation: false,
            labelLine: {
              normal: {
                length: 10,
                length2: 10,
              },
            },
            label: {
              normal: {
                formatter: (params) => {
                  return (
                    "{value|" +
                    params.percent +
                    "%}" +
                    "\n" +
                    "{name|" +
                    params.name +
                    "}"
                  );
                },
                rich: {
                  value: {
                    fontSize: fontSize(0.12),
                    color: "#fff",
                  },
                  name: {
                    fontSize: fontSize(0.12),
                    color: "#fff",
                  },
                },
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scope>
#education {
  @include w_h_size;
}
</style>