import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoreService } from "../../services/core.service";
import { Suspect } from "../../models/suspect.model";
import { Mobile } from "../../models/mobile.model";
import { ModeOperatoire } from "../../models/mode-operatoire.model";

@Component({
  selector: 'page-memo',
  templateUrl: 'memo.html'
})
export class MemoPage {
  filter:string = 'suspects';
  suspects: Suspect[];
  mobiles: Mobile[];
  mo: ModeOperatoire[];

  constructor(
    public navCtrl: NavController,
    public core: CoreService
  ) {
    this.core.getPersons().subscribe(
      (data) => this.suspects = data,
      (error: any) => console.error(error)
    );
    this.core.getMobiles().subscribe(
      (data) => this.mobiles = data,
      (error: any) => console.error(error)
    );
    this.core.getModeOperatoires().subscribe(
      (data) => this.mo = data,
      (error: any) => console.error(error)
    );
  }

}
