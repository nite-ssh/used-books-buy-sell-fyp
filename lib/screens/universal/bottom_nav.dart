import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/screens/blog/blog.dart';
import 'package:second_hand_books_buy_sell/screens/user_pages/donations.dart';
import 'package:second_hand_books_buy_sell/screens/maps/maps.dart';
import 'package:second_hand_books_buy_sell/screens/user_pages/homepage/homepage_screen.dart';
import 'package:second_hand_books_buy_sell/screens/user_pages/userpersonalinfo/uploadBookInfo.dart';

class BottomNav extends StatefulWidget {
  const BottomNav({Key? key}) : super(key: key);

  @override
  _BottomNavState createState() => _BottomNavState();
}

class _BottomNavState extends State<BottomNav> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  static const List<Widget> _widgetOptions = <Widget>[
    Homepage(),
    GMaps(),
    BookUpload(),
    DonateBooks(),
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
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.room),
            label: 'Library',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.add_circle, size: 40),
            label: 'Buy/Sell',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.volunteer_activism,
            ),
            label: 'Donate',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.menu_book),
            label: 'Blog',
          )
        ],
        currentIndex: _selectedIndex,
        unselectedItemColor: Colors.white,
        selectedItemColor: const Color(0xff1D1C1A),
        onTap: _onItemTapped,
      ),
    );
  }
}
