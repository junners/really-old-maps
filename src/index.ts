import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

// CustomMap.build('map');

export async function initMap(): Promise<void> {
  (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
  (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;

  const customMap: CustomMap = new CustomMap('map');
  customMap.addUserMarker(new User());
  customMap.addCompanyMarker(new Company());
}

initMap();
