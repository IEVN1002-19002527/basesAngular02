
// Clase para calcular resistencias
export class ResistenciaCalculator {
  // Propiedades para almacenar los valores calculados
  public valor: number = 0;
  public valorMaximo: number = 0;
  public valorMinimo: number = 0;
  public resultado: boolean = false;
  
  // Propiedades para los colores seleccionados
  private color1: string = '';
  private color2: string = '';
  private color3: string = '';
  private tolerancia: string = '';
  private colors: string[] = [];

  constructor(colors: string[] = []) {
    this.colors = colors;
  }

  // Método para establecer los colores y tolerancia
  setColores(color1: string, color2: string, color3: string, tolerancia: string): void {
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    this.tolerancia = tolerancia;
  }

  // Método principal para calcular la resistencia
  calcular(): void {
    // Obtiene el valor numérico del primer color
    const valorColor1 = this.colors.indexOf(this.color1);
    // Obtiene el valor numérico del segundo color
    const valorColor2 = this.colors.indexOf(this.color2);
    // Calcula el multiplicador basado en el tercer color
    const multiplicador = Math.pow(10, this.colors.indexOf(this.color3));

    // Calcula el valor nominal de la resistencia
    this.valor = (valorColor1 * 10 + valorColor2) * multiplicador;
    // Determina el factor de tolerancia (5% para oro, 10% para plata)
    const toleranceFactor = this.tolerancia === 'oro' ? 0.05 : 0.10;
    // Calcula el valor máximo permitido
    this.valorMaximo = this.valor * (1 + toleranceFactor);
    // Calcula el valor mínimo permitido
    this.valorMinimo = this.valor * (1 - toleranceFactor);
    // Marca el resultado como exitoso
    this.resultado = true;
  }

  // Método para obtener los resultados como objeto
  getResultados(): { valor: number; valorMaximo: number; valorMinimo: number; resultado: boolean } {
    return {
      valor: this.valor,
      valorMaximo: this.valorMaximo,
      valorMinimo: this.valorMinimo,
      resultado: this.resultado
    };
  }

  // Método para resetear los valores
  reset(): void {
    this.valor = 0;
    this.valorMaximo = 0;
    this.valorMinimo = 0;
    this.resultado = false;
    this.color1 = '';
    this.color2 = '';
    this.color3 = '';
    this.tolerancia = '';
  }
}

// Función original mantenida para compatibilidad
export function calcularResistencia(
  color1: string,
  color2: string, 
  color3: string,
  tolerancia: string,
  colors: string[]
) {
  // Obtiene el valor numérico del primer color
  const valorColor1 = colors.indexOf(color1);
  // Obtiene el valor numérico del segundo color
  const valorColor2 = colors.indexOf(color2);
  // Calcula el multiplicador basado en el tercer color
  const multiplicador = Math.pow(10, colors.indexOf(color3));

  // Calcula el valor nominal de la resistencia
  const valor = (valorColor1 * 10 + valorColor2) * multiplicador;
  // Determina el factor de tolerancia (5% para oro, 10% para plata)
  const toleranceFactor = tolerancia === 'oro' ? 0.05 : 0.10;
  // Calcula el valor máximo permitido
  const valorMaximo = valor * (1 + toleranceFactor);
  // Calcula el valor mínimo permitido
  const valorMinimo = valor * (1 - toleranceFactor);
  
  // Retorna los resultados del cálculo
  return {
    valor,
    valorMaximo,
    valorMinimo,
    resultado: true // Indica que el cálculo fue exitoso
  };
}