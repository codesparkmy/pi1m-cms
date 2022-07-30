import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { range, timer } from 'rxjs';
import "rxjs/add/operator/zip";
import "rxjs/add/operator/map";


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() value: number;
  @Input() id: number;
  @Output("onComplete") timerOver: EventEmitter<any> = new EventEmitter<any>();
  timerValue;
  areTenSecsRemainings: boolean = false;
  constructor() { }

  ngOnInit() {
    let source$ = range(0, this.value)
      .zip(timer(0, 1000), x => { /**gives an array */
        return x;
      })
      .map(x => {
        return this.value - x;
      });

    source$.subscribe(
      seconds => {
        let mins = parseInt("" + seconds / 60);
        let secs = seconds % 60;
        let hrs = parseInt("" + mins / 60);
        mins = mins % 60;
        if (secs < 11) this.areTenSecsRemainings = true;
        if (secs == 5) this.timerOver.emit({ id: this.id, msg: "5 sec remaining" });
        let res = {
          hours: hrs,
          minutes: mins,
          seconds: secs
        };
        this.timerValue = res;
      },
      () => this.timerOver.emit("TIMER ERROR"),
      () => this.timerOver.emit("TIMER OVER")
    );
  }

}
