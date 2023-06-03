import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component {

  constructor(private router: Router, private service: Service){

  }

  
  goBack(){
    this.router.navigateByUrl("/page3");
  }

  goToRelax(){
    this.router.navigateByUrl("/relaxpage1");
    //this.service.save("relajada");
    localStorage.setItem("decision-profe", "relajada")
  }

  goToAssertive(){
    this.router.navigateByUrl("assertivepage1");
    //this.service.save("asertiva");
    localStorage.setItem("decision-profe", "asertiva")
  }
}
