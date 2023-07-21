interface Persona {
  nombre: string;
  edad: number;
  email: string;
  telefono: string;
}

type InfoPersona = Pick<Persona, "nombre" | "email">;

const persona: InfoPersona = {
  nombre: "Juan",
  email: "juan@example.com",
};

// Esto dará error, ya que "edad" y "telefono" no están permitidas en el tipo InfoPersona.
// persona.edad = 30; // Error
// persona.telefono = "123-456-789"; // Error
