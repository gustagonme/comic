import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom1',
  templateUrl: './classroom1.component.html',
  styleUrls: ['./classroom1.component.scss']
})
export class Classroom1Component {

  constructor(private router: Router){

  }

  goBack(){
    this.router.navigateByUrl("/invite2");
  }

  goForward(){
    this.router.navigateByUrl("/survey");
  }

}
