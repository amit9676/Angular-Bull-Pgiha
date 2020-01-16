import { Injectable } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  

  public recievedNumbers: number[] = [];
  public exportedNumbers: string[] = [];


  public generateNumbers():Number[]
  {
    let gameNumbers = []
    do{
    gameNumbers[0] = Math.floor(Math.random() * 9);
    }
    while (gameNumbers[0] == 0)

    do{
      gameNumbers[1] = Math.floor(Math.random() * 9);
    }
    while(gameNumbers[1] == gameNumbers[0]);

    do{
      gameNumbers[2] = Math.floor(Math.random() * 9);
    }
    while((gameNumbers[2] == gameNumbers[1]) || (gameNumbers[2] == gameNumbers[0]));

    do{
      gameNumbers[3] = Math.floor(Math.random() * 9);
    }
    while((gameNumbers[3] == gameNumbers[2]) || (gameNumbers[3] == gameNumbers[1]) || (gameNumbers[3] == gameNumbers[0]));

    return gameNumbers;
  }





  public selectText1(value, input1, switc): boolean {   
    if (!value){
      value = 0;
    }

    let val2 = Number(value);

    let numbers = [0,1,2,3,4,5,6,7,8,9];
    if(numbers.indexOf(val2) >= 0)
    {
      this.recievedNumbers.push(val2);
    }
    else
    {
      input1.focus();
      this.recievedNumbers = [];
      return; 
    }
    
    
    if (this.recievedNumbers.length >= 4)
    {
      switc = true;
      return switc
    }
    else{
      switc = false;
      return switc;
    }
  }
      

  public numbercompare(rnd):string[]{
    let exporter2 = []
    
    for(let i = 0; i < 4; i++){
      if (this.recievedNumbers[i] == rnd[i]){
        exporter2[i] = rnd[i];
      }
    }
    
    let exporter = exporter2.map(String);
    return exporter;
  }

  public bullCounter(rnd): number{
    let bullCutner = 0;
    
    for(let i = 0; i < 4; i++){
      if (this.recievedNumbers[i] == rnd[i]){
        bullCutner++;
      }
    }
    return bullCutner;
  }

  public pgihaCounter(rnd): number{
    let pgihaCutner = 0;
    
    for(let i = 0; i < 4; i++){
      for(let j = 0; j < 4; j++){
        if ((this.recievedNumbers[i] == rnd[j]) &&(this.recievedNumbers[i] != rnd[i])){
          pgihaCutner++;
        }
      }
    }
    return pgihaCutner;
  }
}
