import { Component, OnInit } from '@angular/core';
import { BeastsService } from 'src/app/serv/beasts.serv.service';

@Component({
  selector: 'app-panel-beasts',
  templateUrl: './panel-beasts.component.html',
  styleUrls: ['./panel-beasts.component.css']
})
export class PanelBeastsComponent implements OnInit {

  constructor(public beastsSvc:BeastsService) { }

  ngOnInit() {
  }

}
