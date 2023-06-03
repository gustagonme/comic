import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterinvite1',
  templateUrl: './alterinvite1.component.html',
  styleUrls: ['./alterinvite1.component.scss']
})
export class Alterinvite1Component {

  constructor(private router: Router) {
  }

  goForward() {
    this.router.navigateByUrl("/alterinvite2");
  }
  goBack() {
      this.router.navigateByUrl("/cafeteria2");
  }
}
