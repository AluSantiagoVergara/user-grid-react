import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Trophy } from "lucide-react";

interface UsuarioProps {
  id: number;
  nombre: string;
  puntaje: number;
}

const Usuario = ({ id, nombre, puntaje }: UsuarioProps) => {
  const getPuntajeStyles = (puntaje: number) => {
    if (puntaje >= 45) {
      return {
        badge: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50",
        card: "border-purple-500/50 shadow-lg shadow-purple-500/20",
        icon: "text-purple-600"
      };
    }
    if (puntaje >= 30) {
      return {
        badge: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50",
        card: "border-blue-500/50 shadow-lg shadow-blue-500/20",
        icon: "text-blue-600"
      };
    }
    return {
      badge: "bg-gradient-to-r from-gray-600 to-gray-500 text-white shadow-lg shadow-gray-500/50",
      card: "border-gray-500/50 shadow-lg shadow-gray-500/20",
      icon: "text-gray-600"
    };
  };

  const styles = getPuntajeStyles(puntaje);

  return (
    <Card 
      className={`
        ${styles.card}
        hover:scale-105 
        transition-all 
        duration-300 
        border-2
        bg-card
        backdrop-blur-sm
      `}
    >
      <CardHeader className="pb-3 bg-gradient-to-br from-card to-muted/30">
        <CardTitle className="flex items-center justify-between text-xl font-bold">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-full bg-muted ${styles.icon}`}>
              <User className="w-5 h-5" />
            </div>
            <span className="text-foreground">{nombre}</span>
          </div>
          <Badge variant="secondary" className="text-xs font-semibold px-3 py-1">
            ID: {id}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className={`w-5 h-5 ${styles.icon}`} />
            <span className="text-base font-semibold text-foreground">Puntaje:</span>
          </div>
          <Badge className={`text-2xl font-extrabold px-6 py-3 ${styles.badge} animate-pulse`}>
            {puntaje}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default Usuario;
