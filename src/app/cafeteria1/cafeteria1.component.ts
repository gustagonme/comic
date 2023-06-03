import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/service';

@Component({
  selector: 'app-cafeteria1',
  templateUrl: './cafeteria1.component.html',
  styleUrls: ['./cafeteria1.component.scss']
})
export class Cafeteria1Component {

  constructor(private router: Router, private service: Service){

  }

  
  goBack(){
    this.router.navigateByUrl("/relaxpage1");
  }

  goToInvite(){
    this.router.navigateByUrl("/invite1");
    //this.service.save("invitar");
    localStorage.setItem("cafeteria", "invitar")
  }

  goToIgnore(){
    this.router.navigateByUrl("/ignore1");
    //this.service.save("ignorar");
    localStorage.setItem("cafeteria", "ignorar")
  }

}
