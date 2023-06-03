import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Service } from '../service/service';

@Component({
  selector: 'app-invite2',
  templateUrl: './invite2.component.html',
  styleUrls: ['./invite2.component.scss']
})
export class Invite2Component {
  previousPath:string ="";
  constructor(private router: Router, private service: Service){
  }

  goForward(){
    this.router.navigateByUrl("/invite1");
  }
  goBack(){
      this.router.navigateByUrl("/invite1");
  }

  goHome(){
    this.router.navigateByUrl("/home1");
    localStorage.setItem("desicion-final", "casa")
  }

  goClassroom(){
    this.router.navigateByUrl("/classroom1");
    localStorage.setItem("desicion-final", "salon")
  }

}
