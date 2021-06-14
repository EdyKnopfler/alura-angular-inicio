// Gerado usando http://json2ts.com/
// a partir da amostra na pasta dados

// Um servidor de mock pode ser criado com https://github.com/typicode/json-server

export interface Transferencia {
  id?: string;  // ? = opcional
  valor: number;
  destino: number;
  data?: Date;
}
