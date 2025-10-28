import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UsuarioProps {
  id: number;
  nombre: string;
  puntaje: number;
}

const Usuario = ({ id, nombre, puntaje }: UsuarioProps) => {
  const getPuntajeColor = (puntaje: number) => {
    if (puntaje >= 45) return "bg-accent text-accent-foreground";
    if (puntaje >= 30) return "bg-primary text-primary-foreground";
    return "bg-secondary text-secondary-foreground";
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span>{nombre}</span>
          <Badge variant="outline" className="text-xs">
            ID: {id}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Puntaje:</span>
          <Badge className={`text-lg font-bold px-4 py-2 ${getPuntajeColor(puntaje)}`}>
            {puntaje}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default Usuario;
