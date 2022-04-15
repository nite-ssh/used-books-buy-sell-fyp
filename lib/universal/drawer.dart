import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';
import 'package:second_hand_books_buy_sell/screens/auth/login_screen.dart';
import 'package:second_hand_books_buy_sell/screens/userpersonalinfo.dart';
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
            accountEmail: Text(""),
            currentAccountPicture: CircleAvatar(
              backgroundColor: Colors.amberAccent,
              child: Text(
                UserInfo().getUsername()[0],
                style: TextStyle(fontSize: 40.0),
              ),
            ),
          ),
          ListTile(
            leading: Icon(Icons.person),
            title: Text("Profile"),
            onTap: () {
              Navigator.push(
                  context,
                  PageRouteBuilder(
                    pageBuilder: (_, __, ___) => UserPersonalInfo(),
                  ));
            },
          ),
          ListTile(
            leading: Icon(Icons.door_back_door_outlined),
            title: Text("Log Out"),
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
