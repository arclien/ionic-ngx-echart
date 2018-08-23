import { Component } from "@angular/core";

@Component({
  selector: "page-chart2",
  templateUrl: "chart2.html"
})
export class Chart2Page {
  data1: any = [];
  data2: any = [];

  private now = new Date(2017, 9, 3);
  private static oneDay = 24 * 3600 * 1000;
  private value = Math.random() * 1000;
  private randomDataInterval: number;

  updateOptions1: any;
  updateOptions2: any;

  options1 = {
    title: {
      text: "Dynamic Data 1"
    },
    tooltip: {
      trigger: "axis",
      formatter: function(params) {
        params = params[0];
        const date = new Date(params.name);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false
      }
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: "Sumulation Data",
        type: "line",
        showSymbol: false,
        hoverAnimation: false,
        data: this.data1
      }
    ],
    dataZoom: [
      {
        show: true,
        start: 94,
        end: 100
      },
      {
        type: "inside",
        start: 94,
        end: 100
      },
      {
        show: true,
        yAxisIndex: 0,
        filterMode: "empty",
        width: 30,
        height: "80%",
        showDataShadow: false,
        left: "93%"
      }
    ]
  };

  options2 = {
    title: {
      text: "Dynamic Data 2"
    },
    tooltip: {
      trigger: "axis",
      formatter: function(params) {
        params = params[0];
        const date = new Date(params.name);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false
      }
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: "Sumulation Data",
        type: "line",
        showSymbol: false,
        hoverAnimation: false,
        data: this.data2
      }
    ]
  };

  private randomData(): object {
    this.now = new Date(+this.now + Chart2Page.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [
          this.now.getFullYear(),
          this.now.getMonth() + 1,
          this.now.getDate()
        ].join("/"),
        Math.round(this.value)
      ]
    };
  }

  ionViewWillEnter() {
    this.randomDataInterval = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        this.data1.shift();
        this.data1.push(this.randomData());
        this.data2.shift();
        this.data2.push(this.randomData());
      }

      this.updateOptions1 = {
        series: [
          {
            data: this.data1
          }
        ]
      };

      this.updateOptions2 = {
        series: [
          {
            data: this.data2
          }
        ]
      };
    }, 1000);
  }

  ionViewWillLeave() {
    clearInterval(this.randomDataInterval);
  }

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.data1.push(this.randomData());
      this.data2.push(this.randomData());
    }
  }
}
