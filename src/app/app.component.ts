import { Component } from '@angular/core';
import { PagingService } from './serv/paging.serv.service';
import { BeastsService } from './serv/beasts.serv.service';
import { BirdsService } from './serv/birds.serv.service';
import { WildsService } from './serv/wilds.serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zoo';

  constructor(public paging:PagingService, public birds:BirdsService,
    public beasts:BeastsService, public wilds:WildsService){}

    // getUp(ev){
    //   console.log('AppComponent  getUp', ev);
  
    //   switch (this.paging.currentPanel) {
    //     case 'birds':
    //         let newBirdIndex = this.getNewCurentIndex(this.birds.currentBirdIndex, ev, this.birds.birds)
    //         this.birds.currentBirdIndex = newBirdIndex
    //         this.birds.currentBird = this.birds.birds[newBirdIndex]
    //       break;
    //     case 'beasts':
    //       if(ev === 1){
    //         alert("beast fleche droite")
    //       } else {alert("beast fleche gauche")}
    //           //this.beasts.currentBeastIndex, ev, this.beasts.beasts)
    //         //this.beasts.currentBeastIndex = newCowIndex
    //         //this.beasts.currentBeast = this.beasts.beasts[newCowIndex]
    //       break;
    //     case 'wilds':
    //         if(ev === 1){
    //           alert("wild fleche droite")
    //         } else {alert("wild fleche gauche")}
    //       break;
            
    //     default:
    //       break;
    //   }
  
    // }

    // private getNewCurentIndex(current:number, delta:number, array:{}[]) : number{
    //   let max = array.length -1;
    //   let newIndex = current + delta
    //   if (newIndex > max) {
    //     newIndex = 0
    //   }    
    //   if (newIndex < 0) {
    //     newIndex = max
    //   }
    //   return newIndex
    // } 
}
