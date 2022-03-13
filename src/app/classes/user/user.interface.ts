import {Location} from "../location/location.interface";

export interface User {
  userName: string,
  firstName: string,
  lastName: string,
  recentlyViewedLocations: Location[],
}
