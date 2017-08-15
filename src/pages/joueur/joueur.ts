import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoreService } from "../../services/core.service";
import { Enquete } from "../../models/enquete.model";

@Component({
  selector: 'page-joueur',
  templateUrl: 'joueur.html'
})
export class JoueurPage {
  _id: number;
  enqueteList: Enquete[];
  enquete: Enquete;

  get enqueteId(): number {
    return this._id;
  }
  set enqueteId(value: number) {
    console.log("set enqueteId", value);
    this._id = value;
    this.findEnquete(value);
  }

  constructor(
    public navCtrl: NavController,
    private core: CoreService
  ) {
    this.loadEnquete();
  }

  loadEnquete() {
    console.log("load enquete"),
      this.core.getEnquete().subscribe(
        (data: Enquete[]) => this.enqueteList = data,
        (error: any) => console.error(error)

      );
  }

  findEnquete(id: number) {
    this.enquete = this.enqueteList.find(e => e.enqueteId === id);
    console.log("findEnquete : ",this.enquete);
  }
}
