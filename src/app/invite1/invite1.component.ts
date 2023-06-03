import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise, take } from 'rxjs';

@Component({
  selector: 'app-invite1',
  templateUrl: './invite1.component.html',
  styleUrls: ['./invite1.component.scss']
})
export class Invite1Component {

  constructor(private router: Router) {
  }

  goForward() {
    this.router.navigateByUrl("/invite2");
  }
  goBack() {
      this.router.navigateByUrl("/cafeteria1");
  }
}
