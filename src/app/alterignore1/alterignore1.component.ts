import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterignore1',
  templateUrl: './alterignore1.component.html',
  styleUrls: ['./alterignore1.component.scss']
})
export class Alterignore1Component {

  constructor(private router: Router){
  }

  goForward(){
    this.router.navigateByUrl("/alterignore2");
  }
  goBack(){
      this.router.navigateByUrl("/cafeteria2");
    }
}
