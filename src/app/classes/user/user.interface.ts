import {Location} from "../location/location.interface";

export interface User {
  userId: string,
  firstName: string,
  lastName: string,
  recentlyViewedLocations: Location[],
}
