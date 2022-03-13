export const API_ROUTES = {
  DATA: {
    GET: () => '/data'
  },
  FEEDBACK: {
    POST: () => '/feedback'
  },
  LOCATION: {
    GET_BY_USERNAME: (userName: string) => `/location?userName=${userName}`,
  },
  LOGIN: {
    POST: () => `/login`,
  },
  WEATHER: {
    GET_BY_CITY: (city: string, userName: string) =>
      `/weather/city/${city}?userName=${userName}`,
    GET_BY_ZIPCODE: (zipCode: number, userName: string) =>
      `/weather/zip/${zipCode}?userName=${userName}`,
    GET_BY_LAT_LONG: (lat: number, long: number, userName: string) =>
      `/weather/coords/${lat}/${long}?userName=${userName}`
  },
}
