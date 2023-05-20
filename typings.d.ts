interface CurrentWeather {
  is_day: number;
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}
interface Daily {
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  precipitation_hours: number;
  precipitation_sum: string;
  rain_sum: number;
  showers_sum: string;
  snowfall_sum: number;
  sunrise: string;
  sunset: string;
  temperature_2m_max: any;
  temperature_2m_min: any;
  time: string;
  uv_index_clear_sky_max: string;
  uv_index_max: any;
  weathercode: number;
}
interface DailyUnits {
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  precipitation_hours: string;
  precipitation_sum: string;
  rain_sum: string;
  showers_sum: string;
  snowfall_sum: string;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_clear_sky_max: string;
  uv_index_max: string;
  weathercode: string;
}
interface Hourly {
  apparent_temperature: string;
  dewponumber_2m: string;
  precipitation: string;
  precipitation_probability: any;
  rain: [];
  relativehumidity_2m: [];
  showers: string;
  snow_depth: number;
  snowfall: [];
  temperature_2m: string;
  time: [];
  uv_index: string;
  uv_index_clear_sky: string;
  visibility: number;
  weathercode: number;
}
interface HourlyUnits {
  apparent_temperature: string;
  dewponumber_2m: string;
  precipitation: string;
  precipitation_probability: any;
  rain: string;
  relativehumidity_2m: string;
  showers: string;
  snow_depth: string;
  snowfall: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
  visibility: string;
  weathercode: string;
}
interface Root {
  current_weather: CurrentWeather;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
