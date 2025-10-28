import Usuario from "./Usuario";

interface UsuarioData {
  id: number;
  nombre: string;
  puntaje: number;
}

const Grilla = () => {
  const usuarios: UsuarioData[] = [
    { id: 1, nombre: "José", puntaje: 50 },
    { id: 15, nombre: "Maria", puntaje: 20 },
    { id: 14, nombre: "Juan", puntaje: 49 }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Sistema de Usuarios
          </h1>
          <p className="text-muted-foreground text-lg">
            Visualización jerárquica de componentes React
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usuarios.map((usuario) => (
            <Usuario
              key={usuario.id}
              id={usuario.id}
              nombre={usuario.nombre}
              puntaje={usuario.puntaje}
            />
          ))}
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Datos fluyendo desde Grilla.jsx → Usuario.jsx (props)</p>
        </footer>
      </div>
    </div>
  );
};

export default Grilla;
