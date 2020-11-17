<template>
  <div class="catalog-left">
    <div class="catalog-content-center">
      <div class="catalog-center" style="margin:0">
        <div class="catalog-resources-share">
          <div class="catalog-share-back"></div>
          <div class="catalog-share-title">目录资源共享概况分析</div>
          <div class="catalog-share-back"></div>
        </div>
        <div class="catalog-resources-chart">
          <div class="resources-chart-content">
            <div class="chart-content-title">
              <span class="chart-content-title-text">共享格式</span>
              <div class="chart-content-title-back"></div>
            </div>
            <ul class="chart-data-list">
              <li class="chart-data-list-item" v-for="item in SharedFormatDataList" :key="item.Key">
                <div class="chart-item-num">{{item.Num}}</div>
                <p class="chart-item-text">{{item.Key}}</p>
              </li>
            </ul>
          </div>
          <div class="resources-chart-content">
            <div class="chart-content-title">
              <span class="chart-content-title-text">共享方式</span>
              <div class="chart-content-title-back" style="flex:1.2"></div>
              <span class="chart-content-title-text">共享类型</span>
              <div class="chart-content-title-back" style="flex:0.8"></div>
            </div>
            <div class="chart-echarts">
              <div style="flex:1.2" class="chart-echarts-column">
                <Graphical></Graphical>
              </div>
              <div style="flex:0.8" class="chart-echarts-pieChart">
                <pie-chart></pie-chart>
              </div>
            </div>
          </div>
          <div class="resources-chart-content">
            <div class="chart-content-title">
              <span class="chart-content-title-text">目录向社会开放情况</span>
              <div class="chart-content-title-back"></div>
            </div>
            <div class="chart-content-echarts">
              <song-top></song-top>
            </div>
          </div>
        </div>
      </div>
      <div class="catalog-center">
        <ul class="catalog-resources-center">
          <li class="resources-center-data">
            <div class="center-data-text">目录总量</div>
            <div class="center-data-num">{{StatisticsObj.dicRecordNum}}</div>
          </li>
          <li class="resources-center-data">
            <div class="center-data-text">部门总数</div>
            <div class="center-data-num">{{StatisticsObj.deptNum}}</div>
          </li>
          <li class="resources-center-data">
            <div class="center-data-text">接入目录总数</div>
            <div class="center-data-num">{{StatisticsObj.dicRecordNumIsOk}}</div>
          </li>
          <li class="resources-center-data">
            <div class="center-data-text">接入部门总数</div>
            <div class="center-data-num">{{StatisticsObj.deptNumIsOk}}</div>
          </li>
        </ul>
        <div class="catalog-chart-center">
          <map-city></map-city>
        </div>
      </div>
      <div class="catalog-center">
        <div class="catalog-resources-share">
          <div class="catalog-share-back"></div>
          <div class="catalog-share-title" style="flex:1.5">接入目录资源共享概况分析</div>
          <div class="catalog-share-back"></div>
        </div>
        <div class="catalog-resources-chart">
          <div class="catalog-resources-right">
            <div class="catalog-resources-title">
              <span class="catalog-resources-title-text">接入共享方式占比</span>
              <div class="catalog-resources-title-back"></div>
            </div>
            <ul class="catalog-resources-crystal">
              <li v-for="item in typeArray" :key="item.text">
                <div class="catalog-resources-crystal-echarts">
                  <flow-meter :obj="item"></flow-meter>
                </div>
                <!-- <span>{{item.text}}</span> -->
              </li>
            </ul>
          </div>
          <div class="catalog-resources-right" style="margin-top:1vw; flex:0.35!important">
            <ul class="catalog-resources-title-tree">
              <!-- <li>
                <span class="catalog-resources-title-text">接入数据总数量</span>
                <div class="catalog-resources-title-back"></div>
              </li>-->
              <li class="pd5">
                <span class="catalog-resources-title-text">被订阅的目录总个数</span>
                <div class="catalog-resources-title-back"></div>
              </li>
              <li class="pd5">
                <span class="catalog-resources-title-text">被订阅的目录总次数</span>
                <div class="catalog-resources-title-back"></div>
              </li>
            </ul>
            <ul class="catalog-resources-data-tree">
              <!-- <li class="catalog-resources-data-item">
                <strong v-for="(item,index) in dataNum.numOne" :key="index">{{item}}</strong>
              </li>-->
              <li class="catalog-resources-data-item">
                <strong v-for="(item,index) in dataNum.numTwo" :key="index">{{item}}</strong>
              </li>
              <li class="catalog-resources-data-item">
                <strong v-for="(item,index) in dataNum.numThree" :key="index">{{item}}</strong>
              </li>
            </ul>
          </div>
          <div class="catalog-resources-right" style="margin-bottom:1.5vw">
            <div class="catalog-resources-title" style="margin-top: 1.5vw;">
              <span class="catalog-resources-title-text">目录订阅情况</span>
              <div class="catalog-resources-title-back"></div>
            </div>
            <ol class="catalog-resources-right-list-title">
              <li>申请方</li>
              <li>目录名称</li>
              <li>提供方</li>
              <li>订阅时间</li>
            </ol>
            <ul class="catalog-resources-right-list">
              <li
                class="catalog-resources-right-list-item"
                v-for="item in catalogList"
                :key="item.Id"
              >
                <span>{{item.ApplyName}}</span>
                <span>{{item.InfoName}}</span>
                <span>{{item.ProviderName}}</span>
                <span>{{item.CreateTime.slice(0,10)}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog-content-footer">
      <div class="catalog-footer-left">
        <div class="footer-left-chart footer-left-chart-two">
          <div class="footer-left-title">
            <span class="footer-left-title-text">近一年新增目录图谱</span>
            <div class="footer-left-title-back"></div>
          </div>
          <div class="footer-left-echarts">
            <Scatter></Scatter>
          </div>
        </div>
        <div class="footer-left-chart footer-left-chart-two">
          <div class="footer-left-title">
            <span class="footer-left-title-text">目录更新频率</span>
            <div class="footer-left-title-back"></div>
          </div>
          <ul class="footer-left-chart-bottom">
            <li class="chart-bottom-data" v-for="item in UpdateNumList" :key="item.type">
              <div class="chart-bottom-data-num">{{item.rate}}</div>
              <div class="chart-bottom-data-text">{{item.type}}</div>
            </li>
          </ul>
        </div>
        <div class="footer-left-chart" style="margin-right:2%;">
          <div class="footer-left-title">
            <span class="footer-left-title-text">部门目录排行榜（TOP10）</span>
            <div class="footer-left-title-back"></div>
          </div>
          <ul class="footer-left-data-list">
            <li class="footer-left-list-item" v-for="item in RankingList10" :key="item.Key">
              <p>{{item.Key}}</p>
              <p>{{item.Num}}条</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="catalog-footer-right">
        <div class="footer-right-echarts">
          <div class="footer-right-echarts-top">
            <div class="footer-right-title">
              <span class="footer-right-title-text">接入目录数量统计</span>
              <div class="footer-right-title-back"></div>
            </div>
            <div class="footer-right-chart">
              <SongTopTwo></SongTopTwo>
            </div>
          </div>
          <div class="footer-right-echarts-butoom">
            <div class="footer-right-title">
              <span class="footer-right-title-text">接入目录共享方式统计</span>
              <div class="footer-right-title-back"></div>
            </div>
            <div class="footer-right-chart">
              <GraphicalTwo></GraphicalTwo>
            </div>
          </div>
        </div>
        <div class="footer-right-list">
          <div class="footer-right-title">
            <span class="footer-right-title-text">接入目录数量部门排行（TOP10）</span>
            <div class="footer-right-title-back"></div>
          </div>
          <ul class="footer-right-data-list">
            <li class="footer-right-list-item" v-for="item in RankingList10Two" :key="item.Key">
              <p style="line-height: 2.2vw">{{item.Key}}</p>
              <p style="line-height: 2.2vw">{{item.Num}}条</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MapCity from "@/components/map";
import FlowMeter from "@/components/flowMeter";
import Graphical from "@/components/barChart/graphical";
import GraphicalTwo from "@/components/barChart/graphicalTwo";
import Stereoscopic from "@/components/barChart/stereoscopic";
import SongTop from "@/components/barChart/songTop";
import SongTopTwo from "@/components/barChart/songTopTwo";
import Scatter from "@/components/scatter";
import PieChart from "@/components/pieChart";
export default {
  components: {
    MapCity,
    FlowMeter,
    Graphical,
    GraphicalTwo,
    Stereoscopic,
    SongTop,
    SongTopTwo,
    Scatter,
    PieChart,
  },
  data() {
    return {
      SharedFormatDataList: [],
      StatisticsObj: {},
      UpdateNumList: [],
      RankingList10: [],
      RankingList10Two: [],
      dataNum: {
        numOne: 0,
        numTwo: 0,
        numThree: 0,
      },
      catalogList: [],
      typeArray: [],
    };
  },
  mounted() {
    this.SharedData();
  },
  methods: {
    numberFormt(num) {
      let str = num.toString();
      for (var i = 0; i < 6; i++) {
        if (str.length < 6) {
          str = "0" + str;
        }
      }
      return str.slice(0, 3) + "." + str.slice(3, 6);
    },
    SharedData() {
      this.BigScreenFormatClassify().then((res) => {
        this.SharedFormatDataList = res.data;
      });
      this.BigScreenDicRecord().then((res) => {
        let list = [];
        list.push(res.data.isOkApiRate);
        list.push(res.data.isOkDatabaseRate);
        list.push(res.data.isOkFileRate);
        res.data.isOk.name.forEach((item, index) => {
          this.typeArray.push({
            text: item,
            num: list[index],
          });
        });
        this.StatisticsObj = res.data;
      });
      this.BigScreenDicRecordUpdateNum().then((res) => {
        this.UpdateNumList = res.data;
      });
      this.BigScreenDicRecordTop10().then((res) => {
        this.RankingList10 = res.data.dicRecords;
        this.RankingList10Two = res.data.dicRecordsIsOk;
      });
      this.BigScreenSubscribe().then((res) => {
        this.catalogList = res.data.subscribe;
        this.dataNum = {
          numOne: this.numberFormt(0),
          numTwo: this.numberFormt(res.data.totalnumber),
          numThree: this.numberFormt(res.data.totalTimes),
        };
      });
    },
  },
};
</script>
<style lang="scss" scope>
.pd5 {
  padding: 0 1vw;
}
.catalog-left {
  flex: 1;
  padding: 1.5vw 0;
  box-sizing: border-box;
  .catalog-content-center {
    width: 100%;
    height: 65%;
    display: flex;
    .catalog-center {
      flex: 1;
      margin-left: 0.8vw;
      .catalog-resources-share,
      .catalog-resources-center,
      .catalog-resources-chart,
      .catalog-chart-center {
        width: 100%;
        height: 10%;
        background-image: url("../../assets/image/z6.png");
        background-size: 100% 100%;
      }
      .catalog-resources-share {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .catalog-share-back {
          width: 30%;
          height: 50%;
          background-image: url("../../assets/image/tiao.png");
          background-size: 100% 100%;
        }
        .catalog-share-title {
          color: #69ccf6;
          width: 36%;
          font-size: 1vw;
          text-align: center;
        }
      }
      ul.catalog-resources-center {
        height: 15%;
        background-image: url("../../assets/image/z8.png");
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        .resources-center-data {
          flex: 1;
          .center-data-text {
            color: #fff;
            font-size: 1vw;
            text-align: center;
          }
          .center-data-num {
            color: #69ccf6;
            text-align: center;
            padding-top: 0.2vw;
            font-size: 1.5vw;
          }
        }
      }
      .catalog-resources-chart {
        margin-top: 3%;
        height: 87%;
        background-image: url("../../assets/image/z5.png");
        display: flex;
        flex-direction: column;
        .resources-chart-content {
          flex: 1;
          padding: 2%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;

          .chart-content-title {
            height: 20%;
            display: flex;
            .chart-content-title-text {
              margin: 0 3%;
              font-size: 1vw;
              color: #69ccf6;
            }
            .chart-content-title-back {
              flex: 1;
              background-image: url("../../assets/image/tiao.png");
              background-size: 100% 100%;
            }
          }
          .chart-content-echarts {
            flex: 1;
            height: 80%;
          }
          .chart-data-list {
            margin-top: 0.8vw;
            height: 80%;
            display: flex;
            justify-content: space-around;
            .chart-data-list-item {
              width: 15%;
              color: #fff;
              display: flex;
              flex-direction: column;
              .chart-item-num {
                flex: 1;
                background-image: url("../../assets/image/z1.png");
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1vw;
              }
              .chart-item-text {
                font-size: 0.8vw;
                text-align: center;
              }
            }
          }
          .chart-echarts {
            height: 80%;
            display: flex;
            .chart-echarts-column,
            .chart-echarts-pieChart {
              flex: 1;
            }
          }
        }
        .catalog-resources-right {
          flex: 1;
          .catalog-resources-crystal {
            height: 85%;
            display: flex;
            li {
              height: 100%;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              // padding: 0 5%;
              // box-sizing: border-box;
              .catalog-resources-crystal-echarts {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              span {
                font-size: 1vw;
                color: #fff;
              }
            }
          }
          .catalog-resources-title-tree {
            display: flex;
            li {
              flex: 1;
              color: #69ccf6;
              font-size: 1.02vw;
              display: flex;
              .catalog-resources-title-back {
                margin-top: 2%;
                height: 70%;
                flex: 1;
                background-image: url("../../assets/image/tiao.png");
                background-size: 100% 100%;
              }
            }
          }
          .catalog-resources-data-tree {
            margin-top: 2%;
            display: flex;

            .catalog-resources-data-item {
              // justify-content: center;
              flex: 1;
              display: flex;
              padding: 0 1vw;
              strong {
                color: #fff;
                padding: 50px 30px;
                background: #0b2768;
                margin-left: 2%;
                font-size: 1vw;
              }
            }
          }
          .catalog-resources-title {
            height: 20%;
            display: flex;
            align-items: center;
            .catalog-resources-title-text {
              font-size: 1.02vw;
              color: #69ccf6;
              // margin-right: 0.8vw;
              padding: 0 1vw;
            }
            .catalog-resources-title-back {
              height: 60%;
              flex: 1;
              background-image: url("../../assets/image/tiao.png");
              background-size: 100% 100%;
            }
          }
          .catalog-resources-right-list-title {
            padding: 0 1vw;
            box-sizing: border-box;
            display: flex;
            color: #fff;
            background: #0a1a50;
            li {
              flex: 1;
              font-size: 0.8vw;
              text-align: center;
            }
          }
          .catalog-resources-right-list {
            padding: 0 1vw;
            .catalog-resources-right-list-item {
              padding: 0 1%;
              box-sizing: border-box;
              color: #fff;
              display: flex;
              span {
                flex: 1;
                font-size: 0.8vw;
                text-align: center;
                padding: 1vh 0.5vw;
              }
            }
          }
        }
      }
      .catalog-chart-center {
        margin-top: 3%;
        height: 82%;
        background-image: url("../../assets/image/z7.png");
      }
    }
  }
  .catalog-content-footer {
    width: 100%;
    height: 33%;
    margin-top: 1.5%;
    box-sizing: border-box;
    display: flex;
    .catalog-footer-left {
      margin-right: 1vw;
      flex: 2.1;
      background-image: url("../../assets/image/z3.png");
      background-size: 100% 100%;
      display: flex;
      .footer-left-chart {
        flex: 1;
        margin-left: 2%;
        .footer-left-title {
          height: 20%;
          display: flex;
          align-items: center;
          .footer-left-title-text {
            font-size: 1.02vw;
            color: #69ccf6;
            margin-right: 0.8vw;
          }
          .footer-left-title-back {
            height: 45%;
            flex: 1;
            background-image: url("../../assets/image/tiao.png");
            background-size: 100% 100%;
          }
        }
        .footer-left-echarts {
          height: 74%;
        }
        .footer-left-chart-bottom {
          height: 80%;
          display: flex;
          flex-wrap: wrap;
          color: #fff;
          .chart-bottom-data {
            background-image: url("../../assets/image/z9.png");
            background-size: 100% 100%;
            width: 30.3%;
            height: 42%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 3%;
            margin-bottom: 4%;
            .chart-bottom-data-num {
              font-size: 1.2vw;
            }
            .chart-bottom-data-text {
              font-size: 0.8vw;
            }
          }
        }
        .footer-left-data-list {
          .footer-left-list-item {
            color: #fff;
            font-size: 0.8vw;
            display: flex;
            line-height: 2vh;
            height: 2.2vh;
            justify-content: space-between;
          }
        }
      }
      .footer-left-chart-two {
        flex: 2;
      }
    }
    .catalog-footer-right {
      // margin-left: 1vw;
      flex: 0.98;
      background-image: url("../../assets/image/z4.png");
      background-size: 100% 100%;
      display: flex;
      padding: 0 1%;
      box-sizing: border-box;
      .footer-right-echarts {
        width: 56%;
        margin-right: 4%;
        .footer-right-echarts-top,
        .footer-right-echarts-butoom {
          height: 50%;
          .footer-right-title {
            height: 20%;
            display: flex;
            align-items: center;
            .footer-right-title-text {
              font-size: 1.02vw;
              color: #69ccf6;
              margin-right: 0.8vw;
            }
            .footer-right-title-back {
              height: 45%;
              flex: 1;
              background-image: url("../../assets/image/tiao.png");
              background-size: 100% 100%;
            }
          }
          .footer-right-chart {
            height: 80%;
          }
        }
      }
      .footer-right-list {
        width: 40%;
        .footer-right-title {
          height: 20%;
          display: flex;
          align-items: center;
          .footer-right-title-text {
            font-size: 1.02vw;
            color: #69ccf6;
            margin-right: 0.8vw;
          }
          .footer-right-title-back {
            height: 45%;
            flex: 1;
            background-image: url("../../assets/image/tiao.png");
            background-size: 100% 100%;
          }
        }
        .footer-right-data-list {
          .footer-right-list-item {
            color: #fff;
            font-size: 0.8vw;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>