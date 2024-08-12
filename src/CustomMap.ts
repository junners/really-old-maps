import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private readonly map: google.maps.Map;
  constructor(targetDiv: string) {
    this.map = new google.maps.Map(
      document.getElementById(targetDiv) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
        mapId: 'MAP',
      },
    );
  }

  addUserMarker(user: User): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.map,
      position: { lat: user.location.lat, lng: user.location.lng },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.map,
      position: { lat: company.location.lat, lng: company.location.lng },
    });
  }
}
