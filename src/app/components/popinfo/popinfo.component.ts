import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
  items = Array(20);
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick( val: number ) {
    console.log( 'item:', val )
    this.popoverCtrl.dismiss({
      item: val
    });
  }

}
