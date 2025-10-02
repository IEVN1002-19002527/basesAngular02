import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CineComponent {
  nombre: string = '';
  cantidadBoletos: number = 0;
  precioPorBoleto: number = 12.00;
  descuento: number = 0;
  cantidadCompradores: number = 0;
  pagoCineco: boolean = false;
  mostrarDatosCompra: boolean = false;
  totalFinal: number = 0;

  procesar() {
    // Lógica para procesar el pago
    if (this.cantidadBoletos > 0 && this.cantidadCompradores > 0) {
      this.mostrarDatosCompra = true; // Mostrar datos de compra al procesar
  
      // Lógica para limitar boletos por persona
      const boletosPermitidos = this.cantidadCompradores * 7; // Cada persona puede comprar hasta 7 boletos
  
      if (this.cantidadBoletos > boletosPermitidos) {
        this.cantidadBoletos = boletosPermitidos; // Limitar a la cantidad máxima permitida
      }
  
      // Lógica para calcular descuentos
      if (this.cantidadBoletos > 5) {
        this.descuento = 0.15; // 15% de descuento
      } else if (this.cantidadBoletos >= 3) {
        this.descuento = 0.10; // 10% de descuento
      } else {
        this.descuento = 0; // Sin descuento 
      }
  
      // Cálculo del total
      let total = this.cantidadBoletos * this.precioPorBoleto;
      total -= total * this.descuento;
  
      // Lógica para calcular total con Cineco
      const totalFinal = this.pagoCineco ? total - total * 0.10 : total; // Descuento adicional del 10%
  
      console.log(`Total a pagar: ${totalFinal}`);
      
      // Lógica para realizar el pago
      this.realizarPago(totalFinal);
      this.totalFinal = totalFinal; // Guardar el total final para mostrar en la página
    } else {
      console.log('Debe ingresar la cantidad de boletos y compradores.');
    }
  }
  

  realizarPago(total: number) {
    // Simulación de un proceso de pago
    console.log(`Procesando el pago de: ${total}`);
  }

  salir() {
    // Lógica para reiniciar los valores
    this.nombre = '';
    this.cantidadBoletos = 0;
    this.precioPorBoleto = 12.00;
    this.descuento = 0;
    this.cantidadCompradores = 0;
    this.pagoCineco = false;
  }

}
