import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/serv/birds.serv.service';

@Component({
  selector: 'app-birds-card',
  templateUrl: './birds-card.component.html',
  styleUrls: ['./birds-card.component.css']
})
export class BirdsCardComponent implements OnInit {

  constructor(public birdsSvc:BirdsService) {
  }

  ngOnInit() {
  }

}
