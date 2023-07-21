interface Persona {
  nombre: string;
  edad: number;
  email: string;
  telefono: string;
}

const persona1: Partial<Persona> = {
  nombre: "Juan",
  edad: 30,
};

persona1.email = "juan@gmail.com";
persona1.telefono = "3000000001";

const persona2: Partial<Persona> = {
  nombre: "María",
  email: "maria@example.com",
};
