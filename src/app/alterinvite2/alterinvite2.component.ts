import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/service';

@Component({
  selector: 'app-alterinvite2',
  templateUrl: './alterinvite2.component.html',
  styleUrls: ['./alterinvite2.component.scss']
})
export class Alterinvite2Component {

  constructor(private router: Router, private service: Service){
  }

  
  goBack(){
      this.router.navigateByUrl("/alterinvite1");
  }

  goHome(){
    this.router.navigateByUrl("/home1");
    this.service.save("casa");
  }

  goClassroom(){
    this.router.navigateByUrl("/classroom1");
    this.service.save("salon");
  }
}
