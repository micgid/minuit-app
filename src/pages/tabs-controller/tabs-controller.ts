import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvestigationsPage } from '../investigations/investigations';
import { JoueurPage } from '../joueur/joueur';
import { MemoPage } from '../memo/memo';
import { DeductionsPage } from '../deductions/deductions';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = JoueurPage;
  tab2Root: any = MemoPage;
  tab3Root: any = DeductionsPage;
  tab4Root: any = InvestigationsPage;

  constructor(public navCtrl: NavController) {
  }
  
  goToInvestigations(params){
    if (!params) params = {};
    this.navCtrl.push(InvestigationsPage);
  }
}
