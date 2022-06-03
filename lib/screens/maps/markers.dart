import 'package:google_maps_flutter/google_maps_flutter.dart';

class Markers {
  Marker library1 = Marker(
    markerId: const MarkerId('Kaiser Library'),
    position: const LatLng(27.7146, 85.3152),
    infoWindow: const InfoWindow(title: 'Kaiser Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );

  Marker library2 = Marker(
    markerId: const MarkerId('American Library'),
    position: const LatLng(27.7382, 85.3365),
    infoWindow: const InfoWindow(title: 'American Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );
  Marker library3 = Marker(
    markerId: const MarkerId('AWON Library'),
    position: const LatLng(27.6927, 85.3180),
    infoWindow: const InfoWindow(title: 'AWON Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );

  Marker library4 = Marker(
    markerId: const MarkerId('Kathmandu Valley Public Library'),
    position: const LatLng(27.699597, 85.318905),
    infoWindow: const InfoWindow(title: 'Kathmandu Valley Public Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );
  Marker library5 = Marker(
    markerId: const MarkerId('Nepal Bharat Library'),
    position: const LatLng(27.7024277, 85.3133098),
    infoWindow: const InfoWindow(title: 'Nepal Bharat Library'),
    icon: BitmapDescriptor.defaultMarkerWithHue(
      BitmapDescriptor.hueRed,
    ),
  );
}
