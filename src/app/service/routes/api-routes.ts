export const API_ROUTES = {
  DATA: {
    GET: () => '/data'
  },
  WEATHER: {
    GET_BY_CITY: (city: string) => `/weather/${city}`
  },
  FEEDBACK: {
    POST: () => '/feedback'
  }
}
