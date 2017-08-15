import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { JoueurPage } from '../pages/joueur/joueur';
import { MemoPage } from '../pages/memo/memo';
import { DeductionsPage } from '../pages/deductions/deductions';
import { InvestigationsPage } from '../pages/investigations/investigations';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CoreService } from "../services/core.service";

@NgModule({
  declarations: [
    MyApp,
    JoueurPage,
    MemoPage,
    DeductionsPage,
    InvestigationsPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JoueurPage,
    MemoPage,
    DeductionsPage,
    InvestigationsPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CoreService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }