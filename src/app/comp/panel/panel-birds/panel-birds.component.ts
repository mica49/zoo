import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/serv/birds.serv.service';
import { PagingService } from 'src/app/serv/paging.serv.service';

@Component({
  selector: 'app-panel-birds',
  templateUrl: './panel-birds.component.html',
  styleUrls: ['./panel-birds.component.css']
})
export class PanelBirdsComponent implements OnInit {

  constructor(public birdsSvc:BirdsService, public paging:PagingService) { }

  ngOnInit() {
  }

  choiceItem(delta:number){
      this.birdsSvc.currentBirdIndex = delta
      this.birdsSvc.currentBird = this.birdsSvc.birds[delta]
  }

}