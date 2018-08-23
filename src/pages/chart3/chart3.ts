import { Component } from "@angular/core";
import { EChartOption } from "echarts";

@Component({
  selector: "page-chart3",
  templateUrl: "chart3.html"
})
export class Chart3Page {
  echartsIntance: any;

  options: EChartOption = {
    color: ["#3398DB"],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "time",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "Test",
        type: "line",
        smooth: true,
        data: [110, 122, 130, 124, 127, 117, 133, 150],
        markLine: {
          silent: true,
          data: [
            {
              yAxis: 50
            },
            {
              yAxis: 100
            }
          ]
        }
      }
    ],
    dataZoom: [
      {
        type: "inside",
        realtime: true,
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
