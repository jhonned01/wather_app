"use client";

import { AreaChart, Card, Title } from "@tremor/react";

type Props = {
  results: Root;
};
const RainChart = ({ results }: Props) => {
  const hourly = results?.hourly?.time
    ?.map((time) =>
      new Date(time).toLocaleTimeString("es-CO", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Rain  (%)": results.hourly.precipitation_probability[i],
    // "Temperature (C)": results.hourly.temperature_2m[i],
  }));

  const dataFormatter = (number: number) => `${number}`;

  return (
    <Card>
      <Title> Chances of Rain</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Rain  (%)"]}
        colors={["blue"]}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default RainChart;
