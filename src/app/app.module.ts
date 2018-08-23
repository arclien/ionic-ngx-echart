import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { NgxEchartsModule } from "ngx-echarts";
import { Chart1Page } from "../pages/chart1/chart1";
import { Chart2Page } from "../pages/chart2/chart2";
import { Chart3Page } from "../pages/chart3/chart3";
import { Chart4Page } from "../pages/chart4/chart4";

import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [
    MyApp,
    Chart1Page,
    Chart2Page,
    Chart3Page,
    Chart4Page,
    TabsPage
  ],
  imports: [BrowserModule, NgxEchartsModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Chart1Page,
    Chart2Page,
    Chart3Page,
    Chart4Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
