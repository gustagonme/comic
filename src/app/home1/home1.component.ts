import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component {

  constructor(private router: Router){

  }

  goBack(){
    this.router.navigateByUrl("/invite2");
  }

  goForward(){
    this.router.navigateByUrl("/survey");
  }

}
