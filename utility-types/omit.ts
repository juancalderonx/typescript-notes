interface Persona {
  nombre: string;
  edad: number;
  email: string;
  telefono: string;
}

// Creamos un nuevo tipo llamado InfoPersona excluyendo las propiedades "email" y "telefono" de Persona
type InfoPersona = Omit<Persona, "email" | "telefono">;

const persona: InfoPersona = {
  nombre: "Juan",
  edad: 30,
};

// Esto dará error, ya que "email" y "telefono" están excluidas en el tipo InfoPersona.
// persona.email = "juan@example.com"; // Error
// persona.telefono = "123-456-789"; // Error
