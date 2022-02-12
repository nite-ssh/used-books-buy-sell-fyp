import 'package:google_maps_flutter/google_maps_flutter.dart';

class Markers {
  Marker library1 = Marker(
    markerId: MarkerId('Kaiser Library'),
    position: LatLng(27.7146, 85.3152),
    infoWindow: InfoWindow(title: 'Kaiser Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );

  Marker library2 = Marker(
    markerId: MarkerId('American Library'),
    position: LatLng(27.7382, 85.3365),
    infoWindow: InfoWindow(title: 'American Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );
  Marker library3 = Marker(
    markerId: MarkerId('AWON Library'),
    position: LatLng(27.6927, 85.3180),
    infoWindow: InfoWindow(title: 'AWON Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );

  Marker library4 = Marker(
    markerId: MarkerId('Kathmandu Valley Public Library'),
    position: LatLng(27.699597, 85.318905),
    infoWindow: InfoWindow(title: 'Kathmandu Valley Public Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );
  Marker library5 = Marker(
    markerId: MarkerId('Nepal Bharat Library'),
    position: LatLng(27.7024277, 85.3133098),
    infoWindow: InfoWindow(title: 'Nepal Bharat Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );
}
