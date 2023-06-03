import { Component } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise, take } from 'rxjs';

@Component({
  selector: 'app-ignore1',
  templateUrl: './ignore1.component.html',
  styleUrls: ['./ignore1.component.scss']
})
export class Ignore1Component {


  constructor(private router: Router){
  }

  goForward(){
    this.router.navigateByUrl("/ignore2");
  }
  goBack(){
      this.router.navigateByUrl("/cafeteria1");
    }
}
