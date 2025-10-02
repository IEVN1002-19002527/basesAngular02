import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { calcularResistencia } from './proceso';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ResistenciaComponent implements OnInit {
  // Lista de colores disponibles
  colors: string[] = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'];
  
  // Mapa de códigos de color
  colorCodes: { [key: string]: string } = {
    'Negro': 'black',
    'Café': '#8B4513',
    'Rojo': 'red',
    'Naranja': 'orange',
    'Amarillo': 'yellow',
    'Verde': 'green',
    'Azul': 'blue',
    'Morado': 'violet',
    'Gris': 'gray',
    'Blanco': 'white'
  };

  // Formulario de resistencia
  resistenciaForm: FormGroup = new FormGroup({});
  valor: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;
  resultado: boolean = false;
  
  // Historial de cálculos
  historial: Array<{
    color1: string;
    color2: string;
    color3: string;
    tolerancia: string;
    valor: number;
    valorMaximo: number;
    valorMinimo: number;
  }> = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicializa el formulario con validaciones
    this.resistenciaForm = this.fb.group({
      color1: ['', Validators.required],
      color2: ['', Validators.required],
      color3: ['', Validators.required],
      tolerancia: ['', Validators.required]
    });
  }

  // Calcula el valor de la resistencia basado en los colores seleccionados
  calcular() {
    if (this.resistenciaForm.valid) {
      const formValue = this.resistenciaForm.value;
      // Convertimos los valores seleccionados a nombres de color
      const c1Nombre = this.getColorNameFromIndex(formValue.color1);
      const c2Nombre = this.getColorNameFromIndex(formValue.color2);
      const c3Nombre = this.getColorNameFromMultiplier(formValue.color3);

      const resultado = calcularResistencia(
        c1Nombre,
        c2Nombre,
        c3Nombre,
        formValue.tolerancia,
        this.colors
      );
      
      this.valor = resultado.valor;
      this.valorMaximo = resultado.valorMaximo;
      this.valorMinimo = resultado.valorMinimo;
      this.resultado = resultado.resultado;

      // Agrega el cálculo actual al historial
      this.agregarAlHistorial({
        color1: c1Nombre,
        color2: c2Nombre,
        color3: c3Nombre,
        tolerancia: formValue.tolerancia,
        valor: this.valor,
        valorMaximo: this.valorMaximo,
        valorMinimo: this.valorMinimo
      });
    }
  }
  
  // Agrega una entrada al historial del usuario
  private agregarAlHistorial(params: {
    color1: string;
    color2: string;
    color3: string;
    tolerancia: string;
    valor: number;
    valorMaximo: number;
    valorMinimo: number;
  }): void {
    this.historial.unshift({
      ...params
    });
    // Limita opcionalmente el historial a los últimos 20 elementos
    if (this.historial.length > 20) {
      this.historial.pop();
    }
  }
  
  // Devuelve el código de color basado en el nombre del color seleccionado
  getColorCode(color: string): string {
    return this.colorCodes[color] || 'transparent';
  }

  // Obtiene el nombre del color a partir del índice (bandas 1 y 2)
  getColorNameFromIndex(valor: any): string {
    const idx = Number(valor);
    return this.colors[idx] ?? '';
  }

  // Mapea el multiplicador (banda 3) al nombre de color
  getColorNameFromMultiplier(valor: any): string {
    const mult = Number(valor);
    const mapa: { [k: number]: string } = {
      1: 'Negro',
      10: 'Café',
      100: 'Rojo',
      1000: 'Naranja',
      10000: 'Amarillo',
      100000: 'Verde',
      1000000: 'Azul',
      10000000: 'Morado',
      100000000: 'Gris',
      1000000000: 'Blanco'
    };
    return mapa[mult] ?? '';
  }

  // Devuelve el color de fondo para la tolerancia
  getToleranceColor(): string {
    if (this.resistenciaForm.value.tolerancia === 'oro') {
      return 'gold';
    } else if (this.resistenciaForm.value.tolerancia === 'plata') {
      return 'silver';
    }
    return 'transparent';
  }
}