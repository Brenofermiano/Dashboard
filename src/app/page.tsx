import ChartOverview from "@/components/Chart";
import Sales from "@/components/Sales";
import { Card,
         CardContent,
         CardDescription,
         CardHeader,
         CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign,Percent,Users2 } from "lucide-react";


export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                  Total de Vendas
                </CardTitle>
                  <DollarSign className="ml-auto w-4 h-4"/>
              </div>
              <CardDescription>
                Total de Vendas 90 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                  Novos Clientes 
                </CardTitle>
                  <Users2 className="ml-auto w-4 h-4"/>
              </div>
              <CardDescription>
                Novos Clientes em 30 dias 
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">234</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                  Pedidos Hoje
                </CardTitle>
                  <Percent className="ml-auto w-4 h-4"/>
              </div>
              <CardDescription>
                Total Pedidos Hoje 
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">65</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                  Total Pedidos
                </CardTitle>
                  <BadgeDollarSign className="ml-auto w-4 h-4"/>
              </div>
              <CardDescription>
                Total Pedidos em 30 Dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">2300</p>
            </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview />
          <Sales />
      </section>
    </main>
  );
}