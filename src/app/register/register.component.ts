import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name:string = "";
  email:string = "";

  constructor(private router: Router){

  }


  goToComic(){
    if(this.name==='' || this.email===""){
      alert("Por favor complete todos los campos.")
    }else{
      localStorage.setItem("name", this.name);
      localStorage.setItem("email", this.email);
      this.router.navigateByUrl("/page1");
    }
  }
  

}
