"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "Gráfico de pizza simples";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#1e40af" },
  { browser: "safari", visitors: 200, fill: "#2563eb" },
  { browser: "firefox", visitors: 187, fill: "#3b82f6" },
  { browser: "edge", visitors: 173, fill: "#60a5fa" },
  { browser: "other", visitors: 90, fill: "#93c5fd" },
];

const chartConfig = {
  visitors: {
    label: "Visitantes",
  },
  chrome: {
    label: "Chrome",
    color: "#1e40af",
  },
  safari: {
    label: "Safari",
    color: "#2563eb",
  },
  firefox: {
    label: "Firefox",
    color: "#3b82f6",
  },
  edge: {
    label: "Edge",
    color: "#60a5fa",
  },
  other: {
    label: "Outro",
    color: "#93c5fd",
  },
} satisfies ChartConfig;

export function ChartPieSimple() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gráfico de Pizza</CardTitle>
        <CardDescription>Jan - Jun 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Aumento de 5,2% neste mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando o total de visitantes dos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
