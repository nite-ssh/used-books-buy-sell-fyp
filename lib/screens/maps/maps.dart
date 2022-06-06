import 'dart:async';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:second_hand_books_buy_sell/screens/universal/drawer.dart';
import 'markers.dart';

class GMaps extends StatefulWidget {
  const GMaps({Key? key}) : super(key: key);

  @override
  GMapsState createState() => GMapsState();
}

class GMapsState extends State<GMaps> {
  Completer<GoogleMapController> _controller = Completer();
  double zoomVal = 5.0;
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Libraries in Kathmandu"),
        ),
        drawer: const DrawerVal(),
        body: Stack(
          children: <Widget>[
            _buildGoogleMap(context),
            buildContainer(),
          ],
        ),
      ),
    );
  }

  Future<void> _plus(double zoomVal) async {
    final GoogleMapController controller = await _controller.future;
    controller.animateCamera(CameraUpdate.newCameraPosition(
        CameraPosition(target: LatLng(27.7172, 85.3240), zoom: zoomVal)));
  }

  Widget buildContainer() {
    return Align(
      alignment: Alignment.bottomLeft,
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 20.0),
        height: 150.0,
        child: ListView(
          scrollDirection: Axis.horizontal,
          children: <Widget>[
            const SizedBox(width: 10.0),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: _boxes(
                  "https://lh5.googleusercontent.com/p/AF1QipP2XWbc1t6TJjVVqxh2qXw7YewZkedCrqWy99oF=w408-h725-k-no",
                  27.7146,
                  85.3152,
                  "Kaiser Library",
                  "Kanti path",
                  "A beautiful library built in the 19th century for Kaiser Shumsher Jang Bahadur Rana. It’s not open to the public but I was allowed to see the famous staircase and entrance way with its original fixtures and fittings."),
            ),
            const SizedBox(width: 10.0),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: _boxes(
                  "https://english.onlinekhabar.com/wp-content/uploads/2021/02/U.S.-EMBASSY-1024x678.jpg",
                  27.7382,
                  85.3365,
                  "American Library",
                  "Maharajgunj Rd",
                  "It\'s one of the best public library in Kathmandu. It not only has books but computers with internet access and a movie room too."),
            ),
            const SizedBox(width: 10.0),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: _boxes(
                  "https://lh3.googleusercontent.com/p/AF1QipPoP5L4b81duz7jSdRzyBuL_H8SFD_vZ6l7NrDY=s1600-w400",
                  27.6927,
                  85.3180,
                  "AWON Library",
                  "Thapathali Road",
                  " It is a public library located at Thapathali,Kathmandu at the Rotary of Kathmandu space.It houses massive 18,000 books"),
            ),
            const SizedBox(width: 10.0),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: _boxes(
                  "https://i.ytimg.com/vi/9B9mLTKYML4/maxresdefault.jpg",
                  27.699597,
                  85.318905,
                  "Kathmandu Valley Public Library",
                  "Pradashani Marga",
                  "Being nearby bus stand this place is easily accessible.Also there are a lot of books to read and daily & weeklynewspaper can be found. Its free for all."),
            ),
            const SizedBox(width: 10.0),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: _boxes(
                  "https://i.ytimg.com/vi/HKp8kizCAec/maxresdefault.jpg",
                  27.7024277,
                  85.3133098,
                  "Nepal Bharat Library",
                  "Kantipath",
                  "Being nearby bus stand this place is easily accessible.Also there are a lot of books to read and daily & weeklynewspaper can be found. Its free for all."),
            )
          ],
        ),
      ),
    );
  }

  Widget _boxes(String _image, double lat, double long, String restaurantName,
      String address, String description) {
    return GestureDetector(
      onTap: () {
        _gotoLocation(lat, long);
      },
      child: Container(
        child: FittedBox(
          child: Material(
              color: Colors.white,
              elevation: 14.0,
              borderRadius: BorderRadius.circular(24.0),
              shadowColor: Color(0x802196F3),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Container(
                    width: 180,
                    height: 200,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(24.0),
                      child: Image(
                        fit: BoxFit.fill,
                        image: NetworkImage(_image),
                      ),
                    ),
                  ),
                  Container(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: myDetailsContainer1(
                          restaurantName, address, description),
                    ),
                  ),
                ],
              )),
        ),
      ),
    );
  }

  Widget myDetailsContainer1(
      String restaurantName, String address, String description) {
    return Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(left: 8.0),
            child: Container(
                child: Wrap(
              direction: Axis.vertical,
              children: [
                Text(
                  restaurantName,
                  style: const TextStyle(
                      color: Colors.teal,
                      fontSize: 24.0,
                      fontWeight: FontWeight.bold),
                ),
                Text(
                  address,
                  style: const TextStyle(
                      color: Colors.black,
                      fontSize: 20.0,
                      fontWeight: FontWeight.bold),
                ),
                Container(
                  padding:
                      const EdgeInsets.symmetric(vertical: 10, horizontal: 0),
                  width: MediaQuery.of(context).size.width * 0.7,
                  child: Column(
                    children: <Widget>[
                      Text(
                        description,
                        textAlign: TextAlign.left,
                        style: const TextStyle(
                          color: Colors.black,
                          fontSize: 15.0,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            )),
          ),
          const SizedBox(height: 5.0),
        ]);
  }

  Widget _buildGoogleMap(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      child: GoogleMap(
        mapType: MapType.normal,
        initialCameraPosition:
            const CameraPosition(target: LatLng(27.6800, 85.3180), zoom: 12),
        onMapCreated: (GoogleMapController controller) {
          _controller.complete(controller);
        },
        markers: {
          Markers().library4,
          Markers().library1,
          Markers().library2,
          Markers().library3
        },
      ),
    );
  }

  Future<void> _gotoLocation(double lat, double long) async {
    final GoogleMapController controller = await _controller.future;
    controller.animateCamera(CameraUpdate.newCameraPosition(CameraPosition(
      target: LatLng(lat, long),
      zoom: 15,
      tilt: 50.0,
      bearing: 45.0,
    )));
  }
}
