import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

CustomMap.init().then(() => {
  const customMap: CustomMap = new CustomMap('map');
  customMap.addMarker(new User());
  customMap.addMarker(new Company());
});
