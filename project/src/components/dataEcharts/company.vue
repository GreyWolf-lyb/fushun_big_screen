<template>
  <div ref="Company" id="Company"></div>
</template>
<script>
import echarts from "echarts";
import { fontSize } from "@/utils/storage.js";
export default {
  data() {
    return {
      listData: [
        { value: 3.4, name: "国有企业" },
        { value: 5, name: "民营（私营）企业" },
        // { value: 10, name: "港澳台资企业" },
        // { value: 0.2, name: "三资（涉外）企业" },
        // { value: 0.2, name: "联营企业" },
        { value: 0.2, name: "政府机关" },
        { value: 0.2, name: "事业单位" },
        { value: 0.2, name: "社团组织" },
        // { value: 0.2, name: "涉外代表处" },
        { value: 10.6, name: "其他" },
      ],
    };
  },
  mounted() {
    this.echartsFun(this.listData);
  },
  methods: {
    echartsFun(list) {
      let myChart = echarts.init(this.$refs.Company);
      let color = [
        "#09e678",
        "#2f60e5",
        "#5bd8ff",
        "#22ff91",
        "#fff94e",
        "#ffae22",
        "#c62afe",
        "#751880",
        "#09e678",
        "#2f60e5",
        "#5bd8ff",
        "#22ff91",
      ];
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
              "万个</br>" +
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
            center: ["40%", "50%"],
            minAngle: 50,
            data: list,
            // hoverAnimation: false,
            labelLine: {
              normal: {
                length: 15,
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
                  name: {
                    fontSize: fontSize(0.12),
                    color: "#fff",
                  },
                  value: {
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
#Company {
  @include w_h_size;
}
</style>