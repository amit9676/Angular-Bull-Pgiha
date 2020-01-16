import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public valueOne: string;
  public valueTwo: string;
  public valueThree: string;
  public valueFour: string;

  public numberPresent = ['_', '_', '_', '_'];
  public switch = false;
  public rnd = this.gameSer.generateNumbers();

  public guessesCounter: number;
  public bullCounter: number;
  public pgihaCounter: number;

  public endSwitch = false;

  constructor(private gameSer: GameService) { }

  ngOnInit() {
    this.guessesCounter = 0;
    this.bullCounter = 0;
    this.pgihaCounter = 0;
  }

  public selectText() {
    
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input3 = document.getElementById('input3');
    let input4 = document.getElementById('input4');
    
    this.gameSer.recievedNumbers = [];
    this.gameSer.selectText1(this.valueOne, input1, this.switch);
    this.gameSer.selectText1(this.valueTwo, input2, this.switch);
    this.gameSer.selectText1(this.valueThree, input3, this.switch);
    this.switch = this.gameSer.selectText1(this.valueFour, input4, this.switch);

    if(this.switch == true)
    {
      this.guessesCounter++;
      this.numberPresent = this.gameSer.numbercompare(this.rnd);
      this.bullCounter = this.gameSer.bullCounter(this.rnd);
      this.pgihaCounter = this.gameSer.pgihaCounter(this.rnd);
      for(let i = 0; i < 4; i++){
        if(this.numberPresent[i] == undefined){
          this.numberPresent[i] = '_';
        }
      }
      if(this.bullCounter == 4)
      {
        this.endSwitch = true;
      }
    }
  }

  public resetCounter():void{
    this.numberPresent = ['_', '_', '_', '_'];
    this.switch = false;
    this.rnd = this.gameSer.generateNumbers();

    this.guessesCounter = 0;
    this.bullCounter = 0;
    this.pgihaCounter = 0;

    this.valueFour = '';
    this.valueThree = '';
    this.valueTwo = '';
    this.valueOne = '';

    this.endSwitch = false;
  }

  public resetText():void{

    this.valueFour = '';
    this.valueThree = '';
    this.valueTwo = '';
    this.valueOne = '';
  }

}
