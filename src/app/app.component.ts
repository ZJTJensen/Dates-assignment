import { Component } from '@angular/core';
import { Timeouts } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   today = new Date();
   lastTimeZoneSeleted = null;
   onTZButtonClick(timezone){
      this.today = new Date();
      if (timezone == 'CST'){
      this.today.setHours(this.today.getHours() - 1);
      }
      else if (timezone == 'MST'){
      this.today.setHours(this.today.getHours() - 2);
      }
      else if(timezone == 'PST'){
      this.today.setHours(this.today.getHours() - 3);
      }

      this.lastTimeZoneSeleted = timezone;
      console.log(this.lastTimeZoneSeleted)
   }
  // pst(time){
  //   time = 'PST'
  // }
  // mst(time){
  //   time = 'MST'
  // }
  // cst(time){
  //   time = 'CST'
  // }
  // est(time){
  //   time = 'EST'
  // }
  // clear(time){

  // }
}
