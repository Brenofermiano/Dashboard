import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CircleDollarSign } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Sales() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos Clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos Clientes últimas 24 Horas</CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex items-center gap-3">
          {/* Avatar arredondado */}
          <Avatar className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden">
            <AvatarImage
              src="https://github.com/Brenofermiano.png"
              alt="Avatar de Breno Fermiano"
              className="rounded-full"
            />
            <AvatarFallback className="rounded-full bg-gray-200">
              BF
            </AvatarFallback>
          </Avatar>
          <span className="text-sm sm:text-base text-gray-700">Breno Fermiano</span>
          <span className="text-sm sm:text-base text-gray-700">R$ 1.000,00</span>
        </article>
      </CardContent>
    </Card>
  );
}
