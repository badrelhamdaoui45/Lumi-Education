'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { financialsData } from '@/lib/data';

export function FinancialsSection() {
  const chartConfig = {
    value: {
      label: 'Amount (£)',
    },
  };

  return (
    <section className="bg-accent/20 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Financial Transparency</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            We believe in complete transparency. See how your contributions are making a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline">Income Sources</CardTitle>
              <CardDescription>
                Total: £{financialsData.income.reduce((acc, item) => acc + item.value, 0).toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={financialsData.income} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" dataKey="value" hide />
                    <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={100} />
                    <Tooltip cursor={{ fill: 'hsl(var(--accent))' }} content={<ChartTooltipContent indicator="dot" />} />
                    <Bar dataKey="value" radius={5} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline">Expenditure</CardTitle>
              <CardDescription>
                Total: £{financialsData.expenditure.reduce((acc, item) => acc + item.value, 0).toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={financialsData.expenditure} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" dataKey="value" hide />
                    <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={130} />
                    <Tooltip cursor={{ fill: 'hsl(var(--accent))' }} content={<ChartTooltipContent indicator="dot" />} />
                    <Bar dataKey="value" radius={5} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
