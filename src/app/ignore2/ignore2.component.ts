import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/service';

@Component({
  selector: 'app-ignore2',
  templateUrl: './ignore2.component.html',
  styleUrls: ['./ignore2.component.scss']
})
export class Ignore2Component {

  constructor(private router: Router, private service: Service){

  }

  
  goBack(){
      this.router.navigateByUrl("/ignore1");
  }

  goHome(){
    this.router.navigateByUrl("/home2");
    //this.service.save("casa");
    localStorage.setItem("desicion-final", "casa")
  }

  goClassroom(){
    this.router.navigateByUrl("/classroom2");
    //this.service.save("salon");
    localStorage.setItem("desicion-final", "salon")
  }

}
