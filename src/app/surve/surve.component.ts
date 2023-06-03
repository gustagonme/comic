import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service/service';

@Component({
  selector: 'app-surve',
  templateUrl: './surve.component.html',
  styleUrls: ['./surve.component.scss']
})
export class SurveComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document,  private service: Service){

  }


  goToComic(){
    const datos = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      desicion1: localStorage.getItem("decision1") ? localStorage.getItem("decision1"): "N/A",
      cafeteria: localStorage.getItem("cafeteria"),
      decision_profe: localStorage.getItem("decision-profe"),
      desicion_final: localStorage.getItem("desicion-final")
    }
    console.log(datos);
    
    this.service.save(datos);
    //this.document.location.href = 'https://forms.gle/UwdFkvXuRLcJL9wg7';
  }
}
