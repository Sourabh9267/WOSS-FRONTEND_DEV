import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {


  Count=0;


  handleCounter(value:string){

    if(value=='+'){
      this.Count=this.Count+1;
    }

    else if(this.Count==0){
      return;
    }

    else if(value=='-'){
      this.Count=this.Count-1;
     
    }
    else{
      this.Count=0;
      console.log("Assignment in Count ");
    }

  }




}
