import { Component } from "@angular/core";
import { EChartOption } from "echarts";

@Component({
  selector: "page-chart1",
  templateUrl: "chart1.html"
})
export class Chart1Page {
  echartsIntance: any;

  options: EChartOption = {
    color: ["#3398DB"],
    backgroundColor: "rgba(255,255,255,1)",
    grid: {
      left: "5%",
      right: "5%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        boundaryGap: false,
        // type: "time",
        data: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        position: "right",
        type: "value",
        min: 0,
        max: 300
      }
    ],
    series: [
      {
        zlevel: 100,

        name: "Test",
        type: "line",
        smooth: true,
        clickable: false,
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          normal: {
            color: "#8ec6ad"
          }
        },
        data: [110, 122, 130, 124, 127, 117, 133]
        // markLine: {
        //   clickable: false,
        //   symbolSize: [0, 0],
        //   data: [
        //     {
        //       yAxis: 50
        //     },
        //     {
        //       yAxis: 200
        //     }
        //   ]
        // },
        // markPoint: {
        //   clickable: false,
        //   symbolSize: 0
        // }
      },

      {
        zlevel: 7,
        stack: "a",
        name: "Test",
        type: "line",
        smooth: true,
        clickable: false,
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          normal: {
            color: "#8ec6ad"
          }
        },
        areaStyle: {
          normal: {
            color: "#8ec6ad"
          }
        },
        data: [50, 50, 50, 50, 50, 50, 50]
      },

      {
        zlevel: 6,
        stack: "a",
        name: "Test",
        type: "line",
        smooth: true,
        clickable: false,
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          normal: {
            color: "#FFFFFF"
          }
        },
        areaStyle: {
          normal: {
            color: "#FFFFFF"
          }
        },
        data: [200, 200, 200, 200, 200, 200, 200]
      },

      {
        zlevel: 1,
        stack: "a",
        name: "Test",
        type: "line",
        smooth: true,
        clickable: false,
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          normal: {
            color: "#8ec6ad"
          }
        },
        areaStyle: {
          normal: {
            color: "#8ec6ad"
          }
        },
        data: [300, 300, 300, 300, 300, 300, 300]
      }
    ],
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 30
      }
    ]
  };

  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  onChartClick(ev) {
    console.log(ev);
  }

  onChartDataZoom(ev) {
    console.log(ev);
  }
  ionViewWillEnter() {
    this.echartsIntance.on("datazoom", function(evt) {
      console.log(evt);
    });
  }

  /*
  chartClick: It emits the same params of 'click' event
  chartDblClick: It emits the same params of 'dblclick' event
  chartMouseDown: It emits the same params of 'mousedown' event
  chartMouseUp: It emits the same params of 'mouseup' event
  chartMouseOver: It emits the same params of 'mouseover' event
  chartMouseOut: It emits the same params of 'mouseout' event
  chartGlobalOut: It emits the same params of 'globalout' event
  chartContextMenu: It emits the same params of 'contextmenu' event (since v1.2.1)
  chartDataZoom: It emits the same params of 'dataZoom' event (thanks to averhaegen)
  */
}
