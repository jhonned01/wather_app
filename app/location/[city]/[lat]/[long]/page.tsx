import { getClient } from "@/apollo-client";
import fetchWatherQueries from "@/graphql/queries/fetchWatherQueries";
import CalloutCard from "./CalloutCard";
import StatCard from "./StatCard";
import InformationPanel from "./InformationPanel";
import TempChart from "./TempChart";
import RainChart from "./RainChart";
import HumidityChart from "./HumidityChart";
import getBasePatch from "@/lib/getBasePath";
import cleanData from "@/lib/cleanData";

export const revalidate = 60;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};
async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWatherQueries,
    variables: {
      current_weather: "true",
      latitude: lat,
      longitude: long,
      timezone: "GMT",
    },
  });

  const result: Root = data.myQuery;

  const dataToSend = cleanData(result, city);

  const res = await fetch(`${getBasePatch()}/api/getWatherSummary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      weatherData: dataToSend,
    }),
  });

  const GPTdata = await res.json();

  console.log("hay señor", GPTdata);

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* information panel */}
      <InformationPanel city={city} lat={lat} long={long} results={result} />

      {/* Welcome to the Weather Page {city} {lat} {long} */}

      <div className="flex-1 p-5 lg:p-10 ">
        <div className="p-5">
          <div className="pb-5">
            <h1 className="text-xl font-bold">Todays Overview</h1>

            <p className="text-sm text-gray-400">
              {" "}
              Last Update at:{" "}
              {new Date(result.current_weather.time).toLocaleString()} (
              {result.timezone})
            </p>
          </div>

          <div className="m-2 mb-10">
            {/* callout Card */}

            <CalloutCard
              message={
                GPTdata?.content || "No se ha renovado la licencia de GPT3"
              }
            />
          </div>

          <div className="grid  grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximun Temperature"
              metric={`${result?.daily?.temperature_2m_max[0]?.toFixed(1)}°`}
              color="yellow"
            />
            <StatCard
              title="Minimun Temperature"
              metric={`${result?.daily?.temperature_2m_min[0]?.toFixed(1)}°`}
              color="green"
            />

            <div>
              <StatCard
                title="UV Index"
                metric={`${result?.daily?.uv_index_max[0]?.toFixed(1)}°`}
                color="rose"
              />
              {Number(result?.daily?.uv_index_max[0]?.toFixed(1)) > 5 && (
                <CalloutCard
                  message="The UV is high today, be sure to wear SPF!"
                  warning
                />
              )}
            </div>
            <div className="flex space-x-3 ">
              <StatCard
                title="Wind Speed"
                metric={`${result?.current_weather.windspeed?.toFixed(1)}m/s`}
                color="cyan"
              />
              <StatCard
                title="Wind Direction"
                metric={`${result?.current_weather?.winddirection?.toFixed(
                  1
                )}°`}
                color="violet"
              />
            </div>
          </div>
        </div>

        <hr className="mb-5" />
        <div className="space-y-3">
          {/* TEMP CHART */}
          <TempChart results={result} />
          {/* Rain Chart  */}
          <RainChart results={result} />
          {/* HumidityChat */}
          <HumidityChart results={result} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
