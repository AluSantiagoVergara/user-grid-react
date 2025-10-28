import Usuario from "./Usuario";

interface UsuarioData {
  id: number;
  nombre: string;
  puntaje: number;
}

const Grilla = () => {
  const usuarios: UsuarioData[] = [
    { id: 1, nombre: "José", puntaje: 50 },
    { id: 15, nombre: "María", puntaje: 20 },
    { id: 14, nombre: "Juan", puntaje: 99 },
    { id: 2, nombre: "Lucía", puntaje: 35 },
    { id: 3, nombre: "Carlos", puntaje: 30 },
    { id: 4, nombre: "Ana", puntaje: 42 },
    { id: 5, nombre: "Pedro", puntaje: 67 },
    { id: 6, nombre: "Laura", puntaje: 71 },
    { id: 7, nombre: "Andrés", puntaje: 53 },
    { id: 8, nombre: "Camila", puntaje: 46 },
    { id: 9, nombre: "Felipe", puntaje: 88 },
    { id: 10, nombre: "Valentina", puntaje: 77 },
    { id: 11, nombre: "Mateo", puntaje: 64 },
    { id: 12, nombre: "Isabella", puntaje: 59 },
    { id: 13, nombre: "Sofía", puntaje: 82 },
    { id: 16, nombre: "Diego", puntaje: 47 },
    { id: 17, nombre: "Manuela", puntaje: 91 },
    { id: 18, nombre: "Daniel", puntaje: 38 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">React Component Hierarchy</span>
          </div>
          <h1 className="text-5xl font-extrabold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sistema de Usuarios
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Visualización jerárquica de componentes React con flujo de datos mediante props
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-muted-foreground">Alto (≥45)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-muted-foreground">Medio (30-44)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <span className="text-muted-foreground">Bajo (&lt;30)</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {usuarios.map((usuario) => (
            <Usuario
              key={usuario.id}
              id={usuario.id}
              nombre={usuario.nombre}
              puntaje={usuario.puntaje}
            />
          ))}
        </div>

        <footer className="mt-16 text-center">
          <div className="inline-block px-8 py-4 bg-card rounded-xl border shadow-lg">
            <p className="text-foreground font-semibold mb-1">Flujo de Datos</p>
            <p className="text-muted-foreground text-sm">
              Grilla.tsx <span className="text-primary font-bold">→</span> Usuario.tsx (via props)
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Grilla;
