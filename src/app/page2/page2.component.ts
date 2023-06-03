import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {

  constructor(private router: Router){

  }

  goForward(){
    this.router.navigateByUrl("/page3");
  }
  goBack(){
    this.router.navigateByUrl("/page1");
  }
}
