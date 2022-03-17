import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../services/crud.dart';
import 'Drivers.dart';

class DriverInfo extends StatefulWidget {
  const DriverInfo({Key? key}) : super(key: key);

  @override
  State<DriverInfo> createState() => _DriverInfoState();
}

class _DriverInfoState extends State<DriverInfo> {
  _makingPhoneCall(phonenumber) async {
    final url = 'tel:$phonenumber';
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: const Text("Drivers' Info")),
        automaticallyImplyLeading: false,
      ),
      body: StreamBuilder<List<Drivers>>(
          stream: CrudMethods.readDrivers(),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              final drivers = snapshot.data!;
              return ListView(
                children: drivers.map(buildDrivers).toList(),
              );
            } else {
              return const Center(child: CircularProgressIndicator());
            }
          }),
    );
  }

  Widget buildDrivers(Drivers driver) => GestureDetector(
        onTap: () => _makingPhoneCall(driver.contact),
        child: Card(
          child: ListTile(
            title: Text(driver.name),
            subtitle: Text(driver.location),
            leading: CircleAvatar(
              child: Image(
                image: AssetImage('assets/images/avatar.png'),
              ),
            ),
            trailing: Text('${driver.contact}'),
          ),
        ),
      );
}
