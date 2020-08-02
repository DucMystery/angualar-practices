import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit,OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  @Input()seconds = 11;

  clearTime(){
    clearInterval(this.intervalId);
  }
  ngOnDestroy(){
    this.clearTime();
  }
  start(){
    this.countDown();
    if (this.remainingTime  <=0){
      this.remainingTime = this.seconds;
    }
  }

  stop(){
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset(){
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = 'Click start button to start the Countdown';

  }

  private countDown (){
    this.clearTime();
    this.intervalId = window.setInterval(() =>{
      this.remainingTime -=1;
      if (this.remainingTime ==0){
        this.message = 'Blast off';
        this.clearTime();
      }else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    },1000);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
