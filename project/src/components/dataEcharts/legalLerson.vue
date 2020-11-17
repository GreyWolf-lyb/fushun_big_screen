<template>
  <div class="flow-meter">
    <div ref="FlowMeter1" id="FlowMeter1"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import "echarts-liquidfill";
import { fontSize } from "@/utils/storage.js";
export default {
  props: {
    num: {
      type: Number,
      default: function () {
        return null;
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.flowMeterFun1();
  },
  methods: {
    flowMeterFun1() {
      let myChart = echarts.init(this.$refs.FlowMeter1);
      this.dataInit(myChart);
    },
    dataInit(myChart) {
      myChart.setOption({
        title: {
          text: this.num / 100 + "%",
          textStyle: {
            fontSize: fontSize(0.16),
            fontFamily: "Microsoft Yahei",
            fontWeight: "normal",
            color: "#fff",
          },
          x: "center",
          y: "35%",
        },
        series: [
          {
            type: "liquidFill",
            radius: "80%",
            center: ["50%", "50%"],
            data: [this.num / 100],
            backgroundStyle: {
              color: {
                type: "linear",
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: "rgba(68, 145, 253, 0)",
                  },
                ],
                globalCoord: false,
              },
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 0,
              },
            },
            label: {
              normal: {
                formatter: "",
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
.flow-meter {
  width: 100%;
  height: 80%;
  padding: 0 20%;
  box-sizing: border-box;
}
#FlowMeter1 {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/image/z2.png");
  background-size: 100% 100%;
}
</style>