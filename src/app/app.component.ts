import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[
    {
      icon:'eye-outline',
      name: 'Contexto',
      redirecTo: '/contexto',
    },
    {
      icon: 'clipboard-outline',
      name: 'Registro',
      redirecTo: '/formulario'
    },
  ];
}
