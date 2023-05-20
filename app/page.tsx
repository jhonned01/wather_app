"use client";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import React from "react";
import CityPicker from "./CityPicker";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">
          lets build a gpt-4 wather app
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.4 , Tailwind CSS, Tremor 2.0 + More !
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* city Picker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
