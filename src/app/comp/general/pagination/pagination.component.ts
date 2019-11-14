import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PagingService } from 'src/app/serv/paging.serv.service';
import { WildsService } from 'src/app/serv/wilds.serv.service';
import { BirdsService } from 'src/app/serv/birds.serv.service';
import { BeastsService } from 'src/app/serv/beasts.serv.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(public paging:PagingService, public birds:BirdsService,
    public beasts:BeastsService, public wilds:WildsService) { }

  ngOnInit() {
  }

  // @Output() moveItem:EventEmitter<number> = new EventEmitter<number>()

   moveItemPage(delta:number):void{

    //console.log('PaginatorComponent moveItemPage ' + delta);
    //this.moveItem.emit(delta)
      switch (this.paging.currentPanel) {
        case 'birds':
            let newBirdIndex = this.getNewCurentIndex(this.birds.currentBirdIndex, delta, this.birds.birds)
            this.birds.currentBirdIndex = newBirdIndex
            this.birds.currentBird = this.birds.birds[newBirdIndex]
          break;
        case 'beasts':
          if(delta === 1){
            alert("beast fleche droite")
          } else {alert("beast fleche gauche")}
              //this.beasts.currentBeastIndex, ev, this.beasts.beasts)
            //this.beasts.currentBeastIndex = newCowIndex
            //this.beasts.currentBeast = this.beasts.beasts[newCowIndex]
          break;
        case 'wilds':
            if(delta === 1){
              alert("wild fleche droite")
            } else {alert("wild fleche gauche")}
          break;
            
        default:
          break;
   }
  }

   private getNewCurentIndex(current:number, delta:number, array:{}[]) : number{
      let max = array.length -1;
      let newIndex = current + delta
      if (newIndex > max) {
        newIndex = 0
      }    
      if (newIndex < 0) {
        newIndex = max
      }
      return newIndex
    }

}
