import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  nombre: string='';
  rut: string='';
  carrera: string='';
  sede: string='';

  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
