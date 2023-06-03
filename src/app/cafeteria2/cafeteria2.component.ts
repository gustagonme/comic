import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/service';

@Component({
  selector: 'app-cafeteria2',
  templateUrl: './cafeteria2.component.html',
  styleUrls: ['./cafeteria2.component.scss']
})
export class Cafeteria2Component {

  constructor(private router: Router, private service: Service){

  }

  
  goBack(){
    this.router.navigateByUrl("/assertivepage1");
  }

  goToInvite(){
    this.router.navigateByUrl("/alterinvite1");
    //this.service.save("invitar");
    localStorage.setItem("cafeteria", "invitar")
  }

  goToIgnore(){
    this.router.navigateByUrl("/alterignore1");
    //this.service.save("ignorar");
    localStorage.setItem("cafeteria", "ignorar")
  }
}
