export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    google.maps.importLibrary('maps').then((map) => {
      const { Map } = map as google.maps.MapsLibrary;
      this.googleMap = new Map(document.getElementById('map') as HTMLElement, {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    });
  }
}
