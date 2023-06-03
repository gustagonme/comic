import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relaxpage1',
  templateUrl: './relaxpage1.component.html',
  styleUrls: ['./relaxpage1.component.scss']
})
export class Relaxpage1Component {

  constructor(private router: Router){

  }

  
  goBack(){
    this.router.navigateByUrl("/page4");
  }
  

  goForward(){
    this.router.navigateByUrl("/cafeteria1");
  }

}
