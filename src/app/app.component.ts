import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedNumberOfStarts: 0 | 1 | 2 | 3 | 4 | 5 = 3;
  isEnabled: boolean = true;
  size: number = 50;


  changeNumber($event: any) {
    this.selectedNumberOfStarts = $event;
  }
}
