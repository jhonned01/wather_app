import { gql } from "@apollo/client";

const fetchWatherQueries = gql`
  query MyQuery(
    $current_weather: String!
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours"
    $hourly: String = "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,visibility,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
      current_weather: $current_weather
      daily: $daily
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_hours
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_min
        temperature_2m_max
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_hours
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dewpoint_2m
        precipitation
        precipitation_probability
        relativehumidity_2m
        rain
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        visibility
        weathercode
      }
      hourly_units {
        apparent_temperature
        precipitation
        dewpoint_2m
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        time
        temperature_2m
        uv_index_clear_sky
        uv_index
        visibility
        weathercode
      }
      latitude
      longitude
      timezone_abbreviation
      utc_offset_seconds
      timezone
    }
  }
`;

export default fetchWatherQueries;
