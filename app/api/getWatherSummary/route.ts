import openai from "@/openai";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    console.log("entro");

    const { weatherData } = await req.json();

    const response: any = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.9,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content:
            "Imagina que eres un nuevo presentador del tiempo presentando en DIRECTO en televisión. Muéstrate enérgico y lleno de carisma. Preséntate como spadra y di que estás EN DIRECTO desde la sede de JHONNED01. Indique la ciudad para la que hace el resumen. A continuación, haga un resumen de las condiciones meteorológicas de hoy. Facilite al telespectador la comprensión y el conocimiento de las medidas que debe tomar para prepararse para estas condiciones meteorológicas, como por ejemplo usar SPF si el Iv es alto, etc. Utilice los datos del uv_index proporcionados para dar consejos sobre los rayos UV. Haga un chiste sobre el tiempo. Asuma que los datos proceden de su equipo en la redacción y no del usuario.",
        },
        {
          role: "user",
          content: `Hola, ¿puedo obtener un resumen del tiempo de hoy, utilice la siguiente información para obtener los datos meteorológicos: ${JSON.stringify(
            weatherData
          )}`,
        },
      ],
    });

    const { data } = response;

    console.log("DATA IS:", data);
    return NextResponse.json(data.choices[0].message || {});
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
}
