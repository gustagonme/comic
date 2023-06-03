import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component {

  constructor(private router: Router){

  }

  goBack(){
    this.router.navigateByUrl("/ignore2");
  }

  goForward(){
    this.router.navigateByUrl("/survey");
  }

}
