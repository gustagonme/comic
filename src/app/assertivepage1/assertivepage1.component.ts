import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assertivepage1',
  templateUrl: './assertivepage1.component.html',
  styleUrls: ['./assertivepage1.component.scss']
})
export class Assertivepage1Component {

  constructor(private router: Router){

  }

  goForward(){
    this.router.navigateByUrl("/cafeteria2");
  }

  goBack(){
    this.router.navigateByUrl("/page4");
  }

}
