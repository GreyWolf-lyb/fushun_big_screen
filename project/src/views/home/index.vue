<template>
  <div class="home-page">
    <div class="header-tips">
      <div class="header-time">
        <span class="time-date">{{date}}</span>
        <span class="time-date" style="margin-left:1vw">{{day}}</span>
        <span class="time-time">{{time}}</span>
      </div>
      <div class="header-title">
        <img src="../../assets/image/fs.png" alt />
        <span>抚顺政务大数据可视化系统</span>
      </div>
      <div class="header-tab">
        <span @click="tabActive(1)" :class="tabsFlag===1?'active':''">目录资源可视化系统</span>
        <span @click="tabActive(2)" :class="tabsFlag===2?'active':''">数据资源可视化系统</span>
      </div>
    </div>
    <Catalogs v-if="tabsFlag===1"></Catalogs>
    <Data v-if="tabsFlag===2"></Data>
  </div>
</template>
<script>
import Catalogs from "@/components/index/catalog";
import Data from "@/components/index/data";
export default {
  name: "HomePage",
  components: {
    Catalogs,
    Data,
  },
  data() {
    return {
      date: null,
      day: null,
      time: null,
      random: null,
      tabsFlag: 2,
    };
  },
  watch: {
    random(val, old) {
      let todaydate = new Date();
      let end_time = this.format(todaydate, "-");
      this.time = end_time.split(" ")[2];
    },
  },
  mounted() {
    this.timeData();
  },
  methods: {
    tabActive(num) {
      this.tabsFlag = num;
    },
    timeData() {
      let todaydate = new Date();
      let end_time = this.format(todaydate, "-");
      this.date = end_time.split(" ")[0];
      this.day = end_time.split(" ")[1];
      setInterval(() => {
        this.random = Math.random();
      }, 1000);
    },
    supplement(nn) {
      return (nn = nn < 10 ? "0" + nn : nn);
    },
    // 转换时间格式
    format(Date, str) {
      var obj = {
        Y: Date.getFullYear(),
        M: Date.getMonth() + 1,
        D: Date.getDate(),
        H: Date.getHours(),
        Mi: Date.getMinutes(),
        S: Date.getSeconds(),
        Day: Date.getDay(),
      };
      var days = null;
      switch (obj.Day) {
        case 1:
          days = "星期一";
          break;
        case 2:
          days = "星期二";
          break;
        case 3:
          days = "星期三";
          break;
        case 4:
          days = "星期四";
          break;
        case 5:
          days = "星期五";
          break;
        case 6:
          days = "星期六";
          break;
        case 0:
          days = "星期日";
          break;
      }
      // 拼接时间 hh:mm:ss
      var time =
        " " +
        this.supplement(obj.H) +
        ":" +
        this.supplement(obj.Mi) +
        ":" +
        this.supplement(obj.S);
      if (str.indexOf("-") > -1) {
        return (
          obj.Y +
          "年" +
          this.supplement(obj.M) +
          "月" +
          this.supplement(obj.D) +
          "日 " +
          days +
          time
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  @include w_h_size;
  background-image: url("../../assets/image/back.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2vw;
  box-sizing: border-box;
  .header-tips {
    width: 100%;
    height: 7%;
    display: flex;
    .header-time,
    .header-title,
    .header-tab {
      flex: 1;
    }
    .header-time {
      padding-top: 0.5%;
      box-sizing: border-box;
      color: #69ccf6;
      .time-date {
        font-size: 1vw;
      }
      .time-time {
        margin-left: 1vw;
        font-size: 0.8vw;
      }
    }
    .header-title {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 8%;
        margin-right: 5%;
      }
      span {
        font-size: 1.5vw;
        color: #65f1ff;
      }
    }
    .header-tab {
      color: #69ccf6;
      font-size: 1vh;
      padding-top: 0.5%;
      box-sizing: border-box;
      text-align: right;
      span {
        padding: 0.5% 2%;
        cursor: pointer;
        border: 0.01vw solid #2762d2;
        font-size: 1vw;
      }
      .active {
        background: #2762d2;
        color: #fff;
      }
    }
  }
}
</style>