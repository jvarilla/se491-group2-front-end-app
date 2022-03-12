export const API_ROUTES = {
  DATA: {
    GET: () => '/data'
  },
  WEATHER: {
    GET_BY_CITY: (city: string) => `/weather/city/${city}`,
    GET_BY_ZIPCODE: (zipCode: number) => `/weather/zip/${zipCode}`,
    GET_BY_LAT_LONG: (lat: number, long: number) => `/weather/current-location/${lat}/${long}`
  },
  FEEDBACK: {
    POST: () => '/feedback'
  }
}
