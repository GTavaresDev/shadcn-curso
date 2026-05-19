import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, User2 } from "lucide-react";
import ChatOverview from "@/components/chart";
import { ChartPieSimple } from "@/components/graph";

export default function Home() {
  return (
    <div className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none ">
                Total de vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"></DollarSign>
            </div>
            <CardDescription>Total de vendas</CardDescription>
            <CardContent>
              <p className="sm:text-lg text-base font-bold">$10,000.00</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none ">
                Novos Clientes
              </CardTitle>
              <User2 className="ml-auto w-4 h-4"></User2>
            </div>
            <CardDescription>Novos clientes em 30 dias</CardDescription>
            <CardContent>
              <p className="sm:text-lg text-base font-bold">223</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none ">
                Pedidos Hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4"></Percent>
            </div>
            <CardDescription>Total de pedidos hoje</CardDescription>
            <CardContent>
              <p className="sm:text-lg text-base font-bold">22</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none ">
                Total de Pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4"></BadgeDollarSign>
            </div>
            <CardDescription>Total de pedidos em 30 dias</CardDescription>
            <CardContent>
              <p className="sm:text-lg text-base font-bold">2265</p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChatOverview />
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartPieSimple />
      </section>
    </div>
  );
}
