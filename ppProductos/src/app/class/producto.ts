export class Producto {
  constructor(
      public id: number,
      public descripcion: string,
      public tipo: string,
      public fechaDeVencimiento: string,
      public precio: number,
      public rutaDeFoto: string
  ) { }
}
