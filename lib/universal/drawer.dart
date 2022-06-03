import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';
import 'package:second_hand_books_buy_sell/screens/auth/login_screen.dart';
import 'package:second_hand_books_buy_sell/screens/userpersonalinfounverified.dart';
import 'package:second_hand_books_buy_sell/userpersonalinfo.dart';

class DrawerVal extends StatefulWidget {
  const DrawerVal({Key? key}) : super(key: key);

  @override
  _DrawerValState createState() => _DrawerValState();
}

class _DrawerValState extends State<DrawerVal> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      // Add a ListView to the drawer. This ensures the user can scroll
      // through the options in the drawer if there isn't enough vertical
      // space to fit everything.
      child: ListView(
        // Important: Remove any padding from the ListView.
        padding: EdgeInsets.zero,
        children: [
          UserAccountsDrawerHeader(
            accountName: Text(UserInfo().getUsername()),
            accountEmail: const Text(""),
            currentAccountPicture: CircleAvatar(
              backgroundColor: Colors.amberAccent,
              child: Text(
                UserInfo().getUsername()[0],
                style: const TextStyle(fontSize: 40.0),
              ),
            ),
          ),
          ExpansionTile(
            title: const ListTile(
              leading: Icon(Icons.person),
              title: Text("Profile"),
            ),
            children: <Widget>[
              GestureDetector(
                child: const ListTile(
                  title: Text(
                    "Verified Books",
                  ),
                ),
                onTap: () {
                  Navigator.push(
                      context,
                      PageRouteBuilder(
                        pageBuilder: (_, __, ___) => const UserPersonalInfo(),
                      ));
                },
              ),
              GestureDetector(
                child: const ListTile(
                  title: Text(
                    "Unverified Books",
                  ),
                ),
                onTap: () {
                  Navigator.push(
                      context,
                      PageRouteBuilder(
                        pageBuilder: (_, __, ___) =>
                            const UserPersonalInfoUnverified(),
                      ));
                },
              )
            ],
          ),
          ListTile(
            leading: const Icon(Icons.door_back_door_outlined),
            title: const Text("Log Out"),
            onTap: () {
              Navigator.pushAndRemoveUntil(
                context,
                MaterialPageRoute(
                  builder: (BuildContext context) => const Login(),
                ),
                (route) => false,
              );
            },
          ),
        ],
      ),
    );
  }
}
