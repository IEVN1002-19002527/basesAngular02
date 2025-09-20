import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1: string = "";
  num2: string = "";
  res: string = "";
  operacion: string = "operacion";

  //sumar():void{
  //  this.res=(parseInt(this.num1)+parseInt(this.num2)).toString();
  //}

  calcular(): void {
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);
    
    switch(this.operacion) {
      case 'sumar':
        this.sumar(n1, n2);
        break;
      case 'restar':
        this.restar(n1, n2);
        break;
      case 'multiplicar':
        this.multiplicar(n1, n2);
        break;
      case 'dividir':
        this.dividir(n1, n2);
        break;
    }
  }

  sumar(n1: number, n2: number): void {
    this.res = (n1 + n2).toString();
  }

  restar(n1: number, n2: number): void {
    this.res = (n1 - n2).toString();
  }

  multiplicar(n1: number, n2: number): void {
    this.res = (n1 * n2).toString();
  }

  dividir(n1: number, n2: number): void {
    this.res = n2 !== 0 ? (n1 / n2).toString() : "Error división";
  }
}
