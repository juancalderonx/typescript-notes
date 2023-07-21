interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
}

const producto: Readonly<Producto> = {
  nombre: "Camiseta",
  precio: 29.99,
  descripcion: "Una cómoda camiseta de algodón.",
};

// Error: Las propiedades de solo lectura no se pueden asignar.
// producto.nombre = "Pantalón";
