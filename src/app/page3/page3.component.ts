import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component {
  constructor(private router: Router, private service: Service){

  }

  
  goBack(){
    this.router.navigateByUrl("/page2");
  }

  goToTalkTeacher(){
    this.router.navigateByUrl("/page4");
    //this.service.save("hablar-profesor");
    localStorage.setItem("decision1", "hablar-profesor")
  }

  goToLunch(){
    this.router.navigateByUrl("/cafeteria1");
    //this.service.save("almorzar");
    localStorage.setItem("decision1", "almorzar")
  }

}
