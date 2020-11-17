<template>
  <div class="population-data-statistics">
    <div class="top-content-echarts">
      <div class="content-echarts-map" style="margin-left: 0">
        <div class="population-resources-share">
          <div class="population-share-back"></div>
          <div class="population-share-title">人口数据分析</div>
          <div class="population-share-back"></div>
        </div>
        <div class="population-resources-chart">
          <div class="population-chart-layout population-chart-layout1">
            <div class="chart-layout-layout" style="flex: 1.3">
              <div class="chart-layout-layout-title">
                近年人口总数量（万人）
                <div class="back-img"></div>
              </div>
              <div class="chart-layout-layout-acharts">
                <SexNum></SexNum>
              </div>
            </div>
            <div class="chart-layout-layout">
              <div class="chart-layout-layout-title">
                近年人口性别比趋势
                <div class="back-img"></div>
              </div>
              <div class="chart-layout-layout-acharts">
                <Sex></Sex>
              </div>
            </div>
          </div>
          <div class="population-chart-layout population-chart-layout1">
            <div class="chart-layout-layout" style="flex: 1.3">
              <div class="chart-layout-layout-title">
                近年人口高龄化趋势
                <div class="back-img"></div>
              </div>
              <div class="chart-layout-layout-acharts">
                <Age></Age>
              </div>
            </div>
            <div class="chart-layout-layout">
              <div class="chart-layout-layout-title">
                近年人口出生、死亡率统计
                <div class="back-img"></div>
              </div>
              <div class="chart-layout-layout-acharts">
                <Death></Death>
              </div>
            </div>
          </div>
          <div class="population-chart-layout">
            <div class="chart-layout-title">
              近年城市和农村人口数量与城市化率（%）
              <div class="back-img"></div>
            </div>
            <div class="chart-layout-echarts">
              <Household></Household>
            </div>
          </div>
        </div>
      </div>
      <div class="content-echarts-map">
        <ul class="population-data-center">
          <li class="population-center-title">
            <div class="population-center-text">人口数量</div>
            <div class="population-center-num">207.3 万人</div>
          </li>
          <li class="population-center-title">
            <div class="population-center-text">法人数量</div>
            <div class="population-center-num">10 万人</div>
          </li>
        </ul>
        <div class="population-chart-center">
          <Map></Map>
        </div>
      </div>
      <div class="content-echarts-map">
        <div class="population-resources-share">
          <div class="population-share-back"></div>
          <div class="population-share-title">
            企业数据分析
            <div class="back-img"></div>
          </div>
          <div class="population-share-back"></div>
        </div>
        <div class="population-resources-chart">
          <div
            class="population-chart-layout population-chart-layout1"
            style="flex: 1.2"
          >
            <div class="chart-layout-layout">
              <div class="chart-layout-layout-title">
                单位性质占比
                <div class="back-img"></div>
              </div>
              <div class="chart-layout-layout-acharts">
                <Company></Company>
              </div>
            </div>
            <div class="chart-layout-layout">
              <div class="chart-layout-layout-title">
                单位区域数据排行
                <div class="back-img"></div>
              </div>
              <div class="chart-layout-layout-acharts">
                <div class="region-list">
                  <div class="region-list-title">
                    <span>区域</span>
                    <span>数量</span>
                  </div>
                  <div class="region-list-content">
                    <RankingList></RankingList>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="population-chart-layout" style="flex: 0.8">
            <div class="population-chart-layout-title">
              <div class="chart-layout-title-item">
                企业法人
                <div class="back-img"></div>
              </div>
              <div class="chart-layout-title-item">
                事业单位法人
                <div class="back-img"></div>
              </div>
              <div class="chart-layout-title-item">
                机关法人
                <div class="back-img"></div>
              </div>
              <div class="chart-layout-title-item">
                社会团体法人
                <div class="back-img"></div>
              </div>
            </div>
            <div class="population-chart-layout2">
              <div
                class="chart-layout-layout2"
                v-for="(item, index) in LegalLersonList"
                :key="index"
              >
                <LegalLerson :num="item"></LegalLerson>
              </div>
            </div>
          </div>
          <div class="population-chart-layout" style="margin-top: -1.5vw">
            <div class="chart-layout-title">
              近年法人单位数量及增长率
              <div class="back-img"></div>
            </div>
            <div class="chart-layout-echarts">
              <CompanyNum></CompanyNum>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-content-echarts">
      <div class="footer-echarts-item">
        <div class="footer-echarts-item-title">
          近年结婚、离婚走势图
          <div class="back-img"></div>
        </div>
        <div class="footer-echarts-item-chart">
          <Marriage></Marriage>
        </div>
      </div>
      <div class="footer-echarts-item">
        <div class="footer-echarts-item-title">
          近年就业情况
          <div class="back-img"></div>
        </div>
        <div class="footer-echarts-item-chart">
          <Employment></Employment>
        </div>
      </div>
      <div class="footer-echarts-item">
        <div class="footer-echarts-item-title">
          受教育程度人口比例
          <div class="back-img"></div>
        </div>
        <div class="footer-echarts-item-chart">
          <Education></Education>
        </div>
      </div>
      <div class="footer-echarts-item">
        <div class="footer-echarts-item-title">
          信用黑名单变化趋势
          <div class="back-img"></div>
        </div>
        <div class="footer-echarts-item-chart">
          <Credit></Credit>
        </div>
      </div>
      <div class="footer-echarts-item">
        <div class="footer-echarts-item-title">
          法人案件数及同比情况
          <div class="back-img"></div>
        </div>
        <div class="footer-echarts-item-chart">
          <Case></Case>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SexNum from "@/components/dataEcharts/sexNum";
import Sex from "@/components/dataEcharts/sex";
import Age from "@/components/dataEcharts/age";
import Death from "@/components/dataEcharts/death";
import Household from "@/components/dataEcharts/household";
import Marriage from "@/components/dataEcharts/marriage";
import Employment from "@/components/dataEcharts/employment";
import Education from "@/components/dataEcharts/education";
import Credit from "@/components/dataEcharts/credit";
import Case from "@/components/dataEcharts/case";
import Company from "@/components/dataEcharts/company";
import CompanyNum from "@/components/dataEcharts/companyNum";
import LegalLerson from "@/components/dataEcharts/legalLerson";
import Map from "@/components/dataEcharts/map";
import RankingList from "@/components/dataEcharts/rankingList";
export default {
  components: {
    SexNum,
    Sex,
    Age,
    Death,
    Household,
    Marriage,
    Employment,
    Education,
    Credit,
    Case,
    Company,
    CompanyNum,
    LegalLerson,
    Map,
    RankingList,
  },
  data() {
    return {
      LegalLersonList: [19, 0.2, 0.2, 0.2],
    };
  },
};
</script>
<style lang="scss" scope>
.population-data-statistics {
  @include w_h_size;
  padding: 1.5vw 0;
  box-sizing: border-box;
  .top-content-echarts {
    width: 100%;
    height: 65%;
    display: flex;
    .content-echarts-map {
      flex: 1;
      margin-left: 0.8vw;
      .population-resources-share {
        width: 100%;
        height: 10%;
        background-image: url("../../assets/image/z6.png");
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .population-share-back {
          width: 35%;
          height: 50%;
          background-image: url("../../assets/image/tiao.png");
          background-size: 100% 100%;
        }
        .population-share-title {
          color: #69ccf6;
          width: 30%;
          font-size: 1vw;
          text-align: center;
        }
      }
      .population-data-center {
        height: 15%;
        background-image: url("../../assets/image/z8.png");
        background-size: 100% 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .population-center-title {
          display: flex;
          align-items: center;
          .population-center-text {
            color: #fff;
            font-size: 1vw;
          }
          .population-center-num {
            color: $color-title;
            font-size: 2vw;
            margin-left: 1vw;
          }
        }
      }
      .population-resources-chart {
        margin-top: 2%;
        height: 88%;
        background-image: url("../../assets/image/z5.png");
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        padding: 0 1vw;
        box-sizing: border-box;
        .population-chart-layout1 {
          display: flex;
          .chart-layout-layout {
            flex: 1;
            .chart-layout-layout-title {
              height: 20%;
              display: flex;
              align-items: center;
              color: $color-title;
              font-size: 1vw;
              .back-img {
                height: 70%;
                flex: 1;
                background-image: url("../../assets/image/tiao.png");
                background-size: 100% 100%;
                margin-left: 0.7vw;
              }
            }
            .chart-layout-layout-acharts {
              height: 80%;
              .region-list {
                height: 80%;
                padding: 0 1vw;
                box-sizing: border-box;
                .region-list-title {
                  height: 20%;
                  display: flex;
                  justify-content: space-between;
                  color: #fff;
                  // font-size: 0.2vw;
                  span {
                    font-size: 0.8vw;
                  }
                }
                .region-list-content {
                  height: 80%;
                }
              }
            }
          }
        }
        .population-chart-layout {
          flex: 1;
          .population-chart-layout-title {
            display: flex;
            height: 20%;
            font-size: 1vw;
            align-items: center;
            .chart-layout-title-item {
              height: 100%;
              flex: 1;
              color: $color-title;
              font-size: 1vw;
              display: flex;
              align-items: center;
              .back-img {
                height: 70%;
                flex: 1;
                background-image: url("../../assets/image/tiao.png");
                background-size: 100% 100%;
                margin-left: 0.7vw;
              }
            }
          }
          .population-chart-layout2 {
            height: 80%;
            display: flex;
            .chart-layout-layout2 {
              flex: 1;
            }
          }
          .chart-layout-title {
            color: $color-title;
            height: 20%;
            display: flex;
            align-items: center;
            font-size: 1vw;
            .back-img {
              height: 70%;
              flex: 1;
              background-image: url("../../assets/image/tiao.png");
              background-size: 100% 100%;
              margin-left: 0.7vw;
            }
          }
          .chart-layout-echarts {
            height: 80%;
          }
        }
      }
      .population-chart-center {
        margin-top: 2%;
        height: 83%;
        background-image: url("../../assets/image/z7.png");
        background-size: 100% 100%;
      }
    }
  }
  .footer-content-echarts {
    width: 100%;
    height: 33%;
    margin-top: 1%;
    background-image: url("../../assets/image/z3.png");
    background-size: 100% 100%;
    display: flex;
    .footer-echarts-item {
      flex: 1;
      padding-left: 1vw;
      box-sizing: border-box;
      .footer-echarts-item-title {
        height: 16%;
        color: $color-title;
        font-size: 1vw;
        display: flex;
        align-items: center;
        .back-img {
          height: 60%;
          flex: 1;
          background-image: url("../../assets/image/tiao.png");
          background-size: 100% 100%;
          margin-left: 0.7vw;
        }
      }
      .footer-echarts-item-chart {
        height: 84%;
      }
    }
  }
}
</style>