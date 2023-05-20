"use client";
import { Country, State, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import { GlobeIcon } from "@heroicons/react/solid";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

export default function CityPicker() {
  const [SelectedCountry, setSelectedCountry] = useState<option>(null);
  const [SelectedCity, setSelectedCity] = useState<cityOption>(null);

  console.log(SelectedCountry);

  const router = useRouter();

  const handleSelectedCountry = (e: option) => {
    setSelectedCountry(e);
    setSelectedCity(null);
  };

  const handleSelectedCity = (e: cityOption) => {
    setSelectedCity(e);
    router.push(
      `/location/${e?.value.name}/${e?.value.latitude}/${e?.value.longitude}`
    );
  };
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80 ">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          options={options}
          value={SelectedCountry}
          onChange={handleSelectedCountry}
        />
      </div>

      {SelectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80 ">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="country">City </label>
          </div>
          <Select
            className="text-black"
            options={City.getCitiesOfCountry(
              SelectedCountry.value.isoCode
            )?.map((state: any) => ({
              value: {
                latitude: state.latitude,
                longitude: state.longitude,
                countryCode: state.countryCode,
                name: state.name,
                stateCode: state.name,
              },
              label: state.name,
            }))}
            value={SelectedCity}
            onChange={handleSelectedCity}
          />
        </div>
      )}
    </div>
  );
}
