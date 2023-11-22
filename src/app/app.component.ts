import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ejercicio 09 - Interpolacion';
  nombre = "Jose Antonio Vargas Lopez";
  edad=24;
  semestre = "Quinto semestre";
  calificaciones = [5,5,10,10,5,5,5,5];

  calcularPromedio(){
    let suma=0;
    const longitudArreglo=this.calificaciones.length;
    for(let i=0; i<longitudArreglo;i++)
      suma+=this.calificaciones[i];
    return suma/longitudArreglo;
  }

  estadoAlumno(){
    if(this.calcularPromedio()>=6)
      return "Aprobado";
    else
      return "No Aprobado";
  }
}
