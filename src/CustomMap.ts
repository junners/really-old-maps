export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  markerHeader(): string;
}

export class CustomMap {
  private readonly map: google.maps.Map;

  private static Map: typeof google.maps.Map;
  private static InfoWindow: typeof google.maps.InfoWindow;
  private static AdvancedMarkerElement: typeof google.maps.marker.AdvancedMarkerElement;

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

  static async init(): Promise<void> {
    const { Map, InfoWindow } = (await google.maps.importLibrary(
      'maps',
    )) as google.maps.MapsLibrary;
    CustomMap.Map = Map;
    CustomMap.InfoWindow = InfoWindow;
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker',
    )) as google.maps.MarkerLibrary;
    CustomMap.AdvancedMarkerElement = AdvancedMarkerElement;
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.map,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
        headerContent: mappable.markerHeader(),
      });
      infoWindow.open({ map: this.map, anchor: marker });
    });
  }
}
