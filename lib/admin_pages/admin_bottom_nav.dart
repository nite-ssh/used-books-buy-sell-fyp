import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/admin_pages/drivers/driver_info.dart';
import 'package:second_hand_books_buy_sell/utils/get_dark_theme.dart';
import '../screens/blog/blog.dart';

class AdminBottomNav extends StatefulWidget {
  const AdminBottomNav({Key? key}) : super(key: key);

  @override
  _AdminBottomNavState createState() => _AdminBottomNavState();
}

class _AdminBottomNavState extends State<AdminBottomNav> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  static const List<Widget> _widgetOptions = <Widget>[
    Text(
      'Index 0: Page to review user posted books',
      style: optionStyle,
    ),
    Text(
      'Index 1: card of users who need driver',
      style: optionStyle,
    ),
    DriverInfo(),
    Blog(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        backgroundColor: Colors.teal,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.reviews_sharp),
            label: 'Review Book',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'User Info',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.drive_eta_rounded,
            ),
            label: 'Driver Info',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.menu_book),
            label: 'Blog',
          )
        ],
        currentIndex: _selectedIndex,
        unselectedItemColor: Colors.white,
        selectedItemColor: Color(0xff1D1C1A),
        onTap: _onItemTapped,
      ),
    );
  }
}
