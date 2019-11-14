import { Component, OnInit } from '@angular/core';
import { WildsService } from 'src/app/serv/wilds.serv.service';

@Component({
  selector: 'app-panel-wilds',
  templateUrl: './panel-wilds.component.html',
  styleUrls: ['./panel-wilds.component.css']
})
export class PanelWildsComponent implements OnInit {

  constructor(public wildsSvc:WildsService) { }

  ngOnInit() {
  }

}
