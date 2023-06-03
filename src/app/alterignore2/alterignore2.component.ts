import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/service';

@Component({
  selector: 'app-alterignore2',
  templateUrl: './alterignore2.component.html',
  styleUrls: ['./alterignore2.component.scss']
})
export class Alterignore2Component {

  constructor(private router: Router, private service: Service){

  }
  
  goBack(){
    this.router.navigateByUrl("/alterignore1");
}

goHome(){
  this.router.navigateByUrl("/home2");
  this.service.save("casa");
}

goClassroom(){
  this.router.navigateByUrl("/classroom2");
  this.service.save("salon");
}
}
