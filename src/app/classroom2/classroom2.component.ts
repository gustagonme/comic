import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom2',
  templateUrl: './classroom2.component.html',
  styleUrls: ['./classroom2.component.scss']
})
export class Classroom2Component {

  constructor(private router: Router){

  }

  goBack(){
    this.router.navigateByUrl("/ignore2");
  }


  goForward(){
    this.router.navigateByUrl("/survey");
  }


}
