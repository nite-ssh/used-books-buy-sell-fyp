import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';
import 'package:second_hand_books_buy_sell/screens/auth/login_screen.dart';

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
          const DrawerHeader(
            decoration: BoxDecoration(
              color: Colors.blue,
            ),
            child: Text('Drawer Header'),
          ),
          ListTile(
            title: Text(UserInfo().getUsername()),
            onTap: () {
              // Update the state of the app.
              // ...
            },
          ),
          ListTile(
            title: const Text('Item 2'),
            onTap: () {
              // Update the state of the app.
              // ...
            },
          ),
          ListTile(
            title: const Text('Logout'),
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
